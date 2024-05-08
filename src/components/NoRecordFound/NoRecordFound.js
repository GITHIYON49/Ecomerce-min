import { Strings } from "../../data/strings";

const NoRecordFound = ({ className }) => {
  const { notFound } = Strings;
  return <div className={className}>{notFound}</div>;
};

export default NoRecordFound;
