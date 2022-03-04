import { FC, useState } from "react";
import styled from "styled-components";
import { Counter } from "src/components/molecules/Counter";
import { TagArea, TagList } from "src/components/molecules/TagArea";

export const Content: FC = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  const [tag, setTag] = useState<string[]>([]);
  const handleClearTag = () => setTag([]);
  const handlePushTag = (addTag) => {
    setTag(
      tag.includes(addTag) ? tag.filter((i) => i !== addTag) : [...tag, addTag]
    );
  };

  const tagList: TagList = [
    { id: "tag1", value: "React" },
    { id: "tag2", value: "Vue.js" },
    { id: "tag3", value: "Angular" },
    { id: "tag4", value: "Next.js" },
    { id: "tag5", value: "Nuxt.js" },
    { id: "tag6", value: "jQuery" },
    { id: "tag7", value: "Gatsby.js" },
  ];

  return (
    <div>
      <div>
        <h1>react初心者向け講座</h1>
      </div>
      <div>
        <div>
          <div>カウント</div>
          <Counter
            count={count}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
        </div>
        <div>
          <div>タグ</div>
          <TagArea
            tag={tag}
            tagList={tagList}
            handleClearTag={handleClearTag}
            handlePushTag={handlePushTag}
          />
        </div>
      </div>
    </div>
  );
};
