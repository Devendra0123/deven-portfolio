import { generateUniqueId } from "@/utils/generateUniqueId";

export function convertHtmlToSanityBlockContent(html) {
  // Create a new DOMParser
  const parser = new DOMParser();

  // Parse the HTML content into a DOM document
  const doc = parser.parseFromString(html, "text/html");

  // Initialize an empty array to store the block content
  const blockContent = [];

  // Function to convert an HTML node to a Sanity span
  function convertNodeToSpan(node, marks = []) {
    return {
      _type: "span",
      text: node.textContent,
      marks,
      _key: generateUniqueId(),
    };
  }

  // Iterate over the child nodes in the document's body
  doc.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase();

      if (
        tagName === "p" ||
        tagName === "h1" ||
        tagName === "h2" ||
        tagName === "h3" ||
        tagName === "h4"
      ) {
        // Handle paragraph and heading tags
        const block = {
          _type: "block",
          style: tagName === "p" ? "normal" : tagName,
          children: [],
          _key: generateUniqueId(),
        };

        node.childNodes.forEach((childNode) => {
          if (childNode.nodeType === Node.TEXT_NODE) {
            block.children.push(convertNodeToSpan(childNode));
          } else if (childNode.nodeType === Node.ELEMENT_NODE) {
            const childTagName = childNode.tagName.toLowerCase();
            if (childTagName === "strong") {
              block.children.push(convertNodeToSpan(childNode, ["strong"]));
            } else if (childTagName === "em") {
              block.children.push(convertNodeToSpan(childNode, ["em"]));
            }
            // Add more conditions for other tags as needed (e.g., 'img', 'a', etc.)
          }
        });

        blockContent.push(block);
      } else if (tagName === "img") {
        // Handle 'img' tags
        const imageUrl = node.getAttribute("src");
        if (imageUrl) {
          blockContent.push({
            _type: "image",
            asset: {
              _type: "reference",
              _ref: imageUrl, // Assuming you have a Sanity asset reference here
            },
            _key: generateUniqueId(),
            alt: node.getAttribute("alt") || "",
          });
        }
      } else if (tagName === "a") {
        // Handle 'a' tags (links)
        const linkUrl = node.getAttribute("href");
        if (linkUrl) {
          blockContent.push({
            _type: "block",
            style: "normal",
            children: [
              {
                _type: "span",
                text: node.textContent,
                _key: generateUniqueId(),
                marks: [
                  {
                    _type: "link",
                    href: linkUrl,
                    _key: generateUniqueId(),
                  },
                ],
              },
            ],
          });
        }
      }
      // Add more conditions for other tags as needed
    }
  });

  return blockContent;
}
