import { css } from "@emotion/react";

export function Red() {
  return (
    <div
      css={css`
        background-color: red;
        &:hover {
          color: white;
        }
      `}
    >
      I'm a red component
    </div>
  );
}
