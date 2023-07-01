import type { CalendarItem } from '../Calendar.types.ts';

export const reorderItems = ({
  items,
  startIndex,
  endIndex,
}: {
  items: CalendarItem[];
  startIndex: number;
  endIndex: number;
}) => {
  const result = Array.from(items);

  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};

// export const moveBetweenColumns = ({
//   itemsA,
//   itemsB,
//   sourceIndex,
//   sourceDroppableId,
//   destinationIndex,
//   destinationDroppableId,
// }: {
//   itemsA: CalendarItem[];
//   itemsB: CalendarItem[];
//   sourceIndex: number;
//   sourceDroppableId: string;
//   destinationIndex: number;
//   destinationDroppableId: string;
// }) => {
//   const newFirst = Array.from(itemsA);
//   const newSecond = Array.from(itemsB);
//
//   const moveFrom = sourceDroppableId === list1.id ? newFirst : newSecond;
//   const moveTo = moveFrom === newFirst ? newSecond : newFirst;
//
//   const [moved] = moveFrom.splice(source.index, 1);
//   moveTo.splice(destination.index, 0, moved);
//
//   return {
//     list1: {
//       ...list1,
//       values: newFirst,
//     },
//     list2: {
//       ...list2,
//       values: newSecond,
//     },
//   };
// };
