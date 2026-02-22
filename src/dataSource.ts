/**
 * Data Source — provides data for export.
 *
 * This module is COMPLETE. Your task is in exportPipeline.ts.
 *
 * Author: Meera Sharma (Data team)
 * Last Modified: 2026-03-25
 */

interface DataRecord {
  [key: string]: any;
}

class DataSource {
  private data: DataRecord[];
  private cursor: number = 0;

  constructor(data: DataRecord[]) {
    this.data = data;
  }

  hasNext(): boolean {
    return this.cursor < this.data.length;
  }

  next(batchSize: number = 100): DataRecord[] {
    const batch = this.data.slice(this.cursor, this.cursor + batchSize);
    this.cursor += batchSize;
    return batch;
  }

  getTotalCount(): number {
    return this.data.length;
  }

  reset(): void {
    this.cursor = 0;
  }
}

export { DataSource, DataRecord };
