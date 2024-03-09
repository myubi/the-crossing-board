import type { TinaField } from "tinacms";
export function blog_postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "author",
      label: "author",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
      required: true,
    },
    {
      type: "boolean",
      name: "draft",
      label: "Is Draft?",
    },
  ] as TinaField[];
}
export function quizFields() {
  return [] as TinaField[];
}
