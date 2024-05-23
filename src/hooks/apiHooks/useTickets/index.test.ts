
import {  act, renderHook } from "@testing-library/react-hooks";
import { renderHook as renderHookWithQuery } from "config/testUtils/renders";
import ticketsApi from "services/api/ticketsApi";
import { waitForPromises } from "config/testUtils";
import useTickets from ".";
import { waitFor } from "@testing-library/react";

let hook: ReturnType<typeof useTickets>;
let ticketsAvailableHook: any;
const data = { tickets: 10, integration_tickets: 10 };

describe("useTickets", () => {
  beforeEach(async() => {
    ticketsApi.getTicketsAvailable = jest.fn(() => ({ data } as any));
    const { result } = renderHook(() => useTickets());
    await waitForPromises();
    hook = result.current
  });
  describe("#ticketsAvailable", () => {
    beforeEach(async() => {
      await act(async()=>{
        const { hook: response } = renderHookWithQuery(() => hook.ticketsAvailable());
        await waitForPromises();
        ticketsAvailableHook = response.result.current
      })
    });
    it("calls the getTicketsAvailable with correct params", async() => {
      await waitFor(() => expect(ticketsAvailableHook.tickets).toEqual(10));
      await waitFor(() => expect(ticketsAvailableHook.integration_tickets).toEqual(10));
    });
  });
});
