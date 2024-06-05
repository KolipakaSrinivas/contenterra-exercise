import DOMPurify from "dompurify";
import he from "he"; // A library to decode HTML entities
import { SelfPropsType } from "./TypeNode";

const SelfHtml: React.FC<SelfPropsType> = ({ post }) => {
  const rawHtml = post.selftext_html || "";
  const decodedHtml = he.decode(rawHtml);
  const sanitizedHtml = DOMPurify.sanitize(decodedHtml);

  return rawHtml
    ? <div
        className="text-gray-900 dark:text-slate-300"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    : <div>No content</div>;
};

export default SelfHtml;
