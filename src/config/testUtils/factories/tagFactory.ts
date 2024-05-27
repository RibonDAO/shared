import Tag from "types/apiResponses/Tag";
import nonProfitFactory from "./nonProfitFactory";

function tagFactory(params: Partial<Tag> = {}): Tag {
  const defaultValues: Tag = {
    id: 23,
    name: "Test Tag",
    status: "active",
    nonProfits: [nonProfitFactory()],
  };
  return Object.assign(defaultValues, params) as Tag;
}

export default tagFactory;
