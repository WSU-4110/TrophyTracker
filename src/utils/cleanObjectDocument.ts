import { type Document } from 'mongoose';

// https://stackoverflow.com/a/65762040
export default function getCleanObjectFromObjectOrDocument<T>(obj: T): T {
  return (obj as unknown as Document)?.toObject?.() ?? obj;
}
