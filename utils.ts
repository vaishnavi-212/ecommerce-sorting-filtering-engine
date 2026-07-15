
import { Product } from './types';

/**
 * 1. MERGE SORT (Used for Rating Sorting)
 */
export const mergeSortArray = <T>(
  data: T[],
  compare: (a: T, b: T) => number
): T[] => {
  if (data.length <= 1) return data;

  const middle = Math.floor(data.length / 2);
  const left = data.slice(0, middle);
  const right = data.slice(middle);

  return mergeArrays(
    mergeSortArray(left, compare),
    mergeSortArray(right, compare),
    compare
  );
};

const mergeArrays = <T>(
  left: T[],
  right: T[],
  compare: (a: T, b: T) => number
): T[] => {
  let result: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (compare(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

export const mergeSort = (data: Product[], key: keyof Product, ascending: boolean): Product[] => {
  return mergeSortArray([...data], (a, b) => {
    const valA = Number(a[key]) || 0;
    const valB = Number(b[key]) || 0;
    return ascending ? valA - valB : valB - valA;
  });
};

/**
 * 2. QUICK SORT (Used for Price Sorting)
 */
export const quickSort = (data: Product[], key: keyof Product, ascending: boolean): Product[] => {
  const arr = [...data];
  if (arr.length <= 1) return arr;
  
  const partition = (items: Product[], left: number, right: number): number => {
    const pivotVal = items[Math.floor((right + left) / 2)][key];
    const pivot = typeof pivotVal === 'string' ? parseFloat(pivotVal) : (pivotVal as number);
    let i = left;
    let j = right;
    while (i <= j) {
      if (ascending) {
        while ((Number(items[i][key]) || 0) < pivot) i++;
        while ((Number(items[j][key]) || 0) > pivot) j--;
      } else {
        while ((Number(items[i][key]) || 0) > pivot) i++;
        while ((Number(items[j][key]) || 0) < pivot) j--;
      }
      if (i <= j) {
        [items[i], items[j]] = [items[j], items[i]];
        i++;
        j--;
      }
    }
    return i;
  };

  const sort = (items: Product[], left: number, right: number) => {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) sort(items, left, index - 1);
      if (index < right) sort(items, index, right);
    }
    return items;
  };

  return sort(arr, 0, arr.length - 1);
};

/**
 * 3. SEGMENT TREE / MERGE SORT TREE (Used for Range Filtering)
 */
export class ProductSegmentTree {
  tree: Product[][];
  n: number;
  baseData: Product[];

  constructor(data: Product[]) {
    this.baseData = [...data].sort((a, b) => a.price - b.price);
    this.n = this.baseData.length;
    this.tree = new Array(4 * this.n);
    if (this.n > 0) this.build(1, 0, this.n - 1);
  }

  private build(node: number, start: number, end: number) {
    if (start === end) {
      this.tree[node] = [this.baseData[start]];
      return;
    }
    const mid = Math.floor((start + end) / 2);
    this.build(2 * node, start, mid);
    this.build(2 * node + 1, mid + 1, end);
    this.tree[node] = this.merge(this.tree[2 * node], this.tree[2 * node + 1]);
  }

  private merge(left: Product[], right: Product[]): Product[] {
    let res: Product[] = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
      if (left[i].price <= right[j].price) res.push(left[i++]);
      else res.push(right[j++]);
    }
    return res.concat(left.slice(i)).concat(right.slice(j));
  }

  query(minPrice: number, maxPrice: number): Product[] {
    if (this.n === 0) return [];
    return this.queryInternal(1, 0, this.n - 1, minPrice, maxPrice);
  }

  private queryInternal(node: number, start: number, end: number, minP: number, maxP: number): Product[] {
    if (this.tree[node][0].price > maxP || this.tree[node][this.tree[node].length - 1].price < minP) {
      return [];
    }
    if (start === end) {
      const p = this.baseData[start];
      return (p.price >= minP && p.price <= maxP) ? [p] : [];
    }
    const mid = Math.floor((start + end) / 2);
    const leftRes = this.queryInternal(2 * node, start, mid, minP, maxP);
    const rightRes = this.queryInternal(2 * node + 1, mid + 1, end, minP, maxP);
    return [...leftRes, ...rightRes];
  }
}

/**
 * 4. INSERTION SORT (Used for Limited Edition Archive)
 */
export const insertionSort = (data: Product[], key: keyof Product, ascending: boolean): Product[] => {
  const arr = [...data];
  for (let i = 1; i < arr.length; i++) {
    let keyItem = arr[i];
    let j = i - 1;
    const valI = Number(keyItem[key]) || 0;
    
    while (j >= 0) {
      const valJ = Number(arr[j][key]) || 0;
      const condition = ascending ? valJ > valI : valJ < valI;
      if (condition) {
        arr[j + 1] = arr[j];
        j = j - 1;
      } else {
        break;
      }
    }
    arr[j + 1] = keyItem;
  }
  return arr;
};

/**
 * 5. COSINE SIMILARITY RECOMMENDATION ENGINE
 */
const FEATURES = [
  'cat_men', 'cat_women', 'cat_kids', 'cat_accessories', 'cat_limited',
  'mat_cotton', 'mat_silk', 'mat_leather', 'mat_wool', 'mat_synthetic',
  'des_slim', 'des_casual', 'des_formal', 'des_avant-garde', 'des_minimal'
];

export const vectorizeProduct = (p: Product): number[] => {
  const v = new Array(FEATURES.length).fill(0);
  const cat = p.category?.toLowerCase() || '';
  const mat = p.material?.toLowerCase() || '';
  const des = p.design?.toLowerCase() || '';

  if (cat.includes('men')) v[0] = 1;
  if (cat.includes('women')) v[1] = 1;
  if (cat.includes('kids')) v[2] = 1;
  if (cat.includes('accessories')) v[3] = 1;
  if (cat.includes('limited')) v[4] = 1;

  if (mat.includes('cotton')) v[5] = 1;
  if (mat.includes('silk')) v[6] = 1;
  if (mat.includes('leather')) v[7] = 1;
  if (mat.includes('wool') || mat.includes('merino') || mat.includes('cashmere')) v[8] = 1;
  if (mat.includes('poly') || mat.includes('synthetic')) v[9] = 1;

  if (des.includes('slim')) v[10] = 1;
  if (des.includes('casual')) v[11] = 1;
  if (des.includes('formal')) v[12] = 1;
  if (des.includes('avant') || des.includes('bauhaus')) v[13] = 1;
  if (des.includes('minimal')) v[14] = 1;

  return v;
};

export const cosineSimilarity = (vecA: number[], vecB: number[]): number => {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
};
