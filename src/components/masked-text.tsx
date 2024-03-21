import { useRef } from "react";
import styles from "./masked-text.module.scss";

const description = `Hey, I'm Nikon, front-end developer. I adore beautiful designs and
coding. When I was little, I went to a drawing class, but then I
gave up. But the feeling of beauty remains and I am ready to help
you show your ideas to the whole world`;

export function MaskText() {
  const body = useRef<HTMLParagraphElement>(null);

  return (
    <p ref={body} className={styles.body}>
      {description.split(" ").map((word, index) => {
        return (
          <span key={index} className={styles.wrapper}>
            <span>{word} </span>
          </span>
        );
      })}
    </p>
  );
}
