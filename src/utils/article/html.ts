/**
 * h3まで表示する
 */
export const ARTICLES_TOC_MAX_DEPTH = 3;

/**
 * heading要素にanchorを挿入
 * anchorの要素は、headingのvalueと同じとする
 * @return html(string)
 */
export const replaceHtml = (
  headings: GatsbyTypes.Maybe<
    readonly GatsbyTypes.Maybe<
      Pick<GatsbyTypes.MarkdownHeading, 'value' | 'depth'>
    >[]
  >,
  html: GatsbyTypes.Maybe<string>
) => {
  let replaced = html as string;

  headings?.forEach((h) => {
    const heading = '<h' + h?.depth + '>' + h?.value + '</h' + h?.depth + '>';

    const anchor =
      '<h' +
      h?.depth +
      ' id="' +
      h?.value +
      '">' +
      h?.value +
      '</h' +
      h?.depth +
      '>';

    replaced = replaced.replace(heading, anchor);
  });

  return replaced;
};
