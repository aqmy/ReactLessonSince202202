import { FC, useState, useEffect } from "react";
import { Counter } from "src/components/molecules/Counter";
import { TagArea, TagList } from "src/components/molecules/TagArea";
import { useCount } from "./hooks";

export const Content: FC = () => {
  console.log("ContentだよinContent");

  //   const [count, setCount] = useState(0);
  //   const handleIncrement = () => setCount(count + 1);
  //   const handleDecrement = () => setCount(count - 1);

  const { count, handleIncrement, handleDecrement, resetCount } = useCount();

  console.log("useCount読み込んだよinContent");

  const [tag, setTag] = useState<string[]>([]);
  const handleClearTag = () => setTag([]);
  const handlePushTag = (addTag) => {
    setTag(
      tag.includes(addTag) ? tag.filter((i) => i !== addTag) : [...tag, addTag]
    );
  };

  const [tagList, setTagList] = useState<TagList>([]);

  useEffect(() => {
    const getTag = async () => {
      const res = await fetch("/api/tag");
      const data: TagList = await res.json();

      setTagList(data);
    };
    getTag();
  }, []);

  console.log("Content return前");
  return (
    <div>
      <div>
        <h1>react初心者向け講座</h1>
      </div>
      <div>
        <div>
          <div>カウント</div>
          <Counter //memoってるから不用意に再描画されない
            count={count}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            resetCount={resetCount}
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
