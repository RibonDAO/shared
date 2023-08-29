import { renderHook } from '@testing-library/react-hooks';
import subscriptionApi from 'services/api/subscriptionApi';
import  useSubscriptions  from '.';

describe('useSubscriptions', () => {
  let hook: ReturnType<typeof useSubscriptions>;
  const data = { subscription: { id: 12 }}
  

  beforeEach(() => {
    const { result } = renderHook(() => useSubscriptions());
    hook = result.current;
  });

  describe('#cancelSubscription', () => {
    beforeEach(() => {
      subscriptionApi.putCancelSubscription = jest.fn(() => ({ data } as any));
  });

    it('calls the subscriptionApi cancelSubscription with correct params', () => {
      hook.cancelSubscription('jwt_token');

      expect(subscriptionApi.putCancelSubscription).toHaveBeenCalledWith('jwt_token');
    });

    it('returns true if the request is successful', async () => {
      const cancelSubscriptionResult = await hook.cancelSubscription('jwt_token');
      
      expect(cancelSubscriptionResult).toEqual(data);
    });

    describe('when api throws an error', () => {
      beforeEach(() => {
        subscriptionApi.putCancelSubscription = jest.fn(() => {
          throw new Error();
        });
      });

      it('returns false', async () => {
        const cancelSubscriptionResult = await hook.cancelSubscription('jwt_token');
        expect(cancelSubscriptionResult).toEqual(false);
      });
    });
  });
});