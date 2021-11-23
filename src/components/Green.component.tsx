import { css } from "@emotion/react";

export function Green() {
  return (
    <div
      css={css`
        background-color: green;
        &:hover {
          color: white;
        }
      `}
    >
      I'm a green component
    </div>
  );
}
