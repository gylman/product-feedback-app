import cuid from "cuid";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Button from "./UI/Button";

const TagsSection = ({ suggestions, handler }) => {
  const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const [selected, setSelected] = useState("All");

  const handleClick = (event) => {
    setSelected(() => event.target.innerText);
  };

  useEffect(() => {
    handler(() => {
      if (selected === "All") {
        return suggestions.map((suggestion) => suggestion.id);
      } else {
        return suggestions
          .filter((suggestion) => suggestion.tag === selected)
          .map((suggestion) => suggestion.id);
      }
    });
  }, [selected]);

  return (
    <Container
      br="10px"
      bg="#ffffff"
      pddn="24px"
      rg="14px"
      cg="8px"
      jc="flex-start"
      ai="start"
      wrap="wrap"
    >
      {tags.map((tag) => (
        <Button
          selected={tag === selected ? 1 : 0}
          onClick={handleClick}
          filter={1}
          key={cuid()}
          kind="tag"
        >
          {tag}
        </Button>
      ))}
    </Container>
  );
};

export default TagsSection;
