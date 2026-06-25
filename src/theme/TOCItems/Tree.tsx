import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/TOCItems/Tree';
import type {TOCTreeNode} from '@docusaurus/theme-common/src/utils/tocUtils.ts';

/*interface headingType {
  id: string;
  value: string;
  children: TOCTreeNode[]
} */

// Recursive component rendering the toc tree
function TOCItemTree({
  toc,
  className,
  linkClassName,
  isChild,
}: Props): ReactNode {
  if (!toc.length) {
    return null;
  }
  return (
    <ul className={isChild ? undefined : className}>
      {isChild ? undefined : <>Inhaltsverzeichnis</>}
      {toc.map((heading:TOCTreeNode) => (
        <li key={heading.id}>
          <Link
            to={`#${heading.id}`}
            className={linkClassName ?? undefined}
            // Developer provided the HTML, so assume it's safe.
            dangerouslySetInnerHTML={{__html: heading.value}}
          />
          <TOCItemTree
            isChild
            toc={heading.children}
            className={className}
            linkClassName={linkClassName}
          />
        </li>
      ))}
    </ul>
  );
}

// Memo only the tree root is enough
export default React.memo(TOCItemTree);
