/**
 * Export Pipeline — reads, transforms, and exports data in bulk.
 *
 * YOU MUST IMPLEMENT the methods marked with TODO.
 * DataSource is working — use it for reading data.
 */

import { DataSource, DataRecord } from './dataSource';

type TransformFn = (record: DataRecord) => DataRecord | null;

interface ExportConfig {
  format: 'csv' | 'json';
  batchSize: number;
  includeHeaders: boolean;
  columns?: string[];  // if specified, only export these columns
}

interface ExportProgress {
  totalRecords: number;
  processedRecords: number;
  exportedRecords: number;
  filteredRecords: number;
  percentComplete: number;
}

interface ExportResult {
  output: string;
  progress: ExportProgress;
  duration: number;
}

class ExportPipeline {
  private source: DataSource;
  private transforms: TransformFn[] = [];
  private progress: ExportProgress;

  constructor(source: DataSource) {
    this.source = source;
    this.progress = {
      totalRecords: source.getTotalCount(),
      processedRecords: 0,
      exportedRecords: 0,
      filteredRecords: 0,
      percentComplete: 0,
    };
  }

  /**
   * Add a transform function to the pipeline.
   *
   * 1. Add transform to the transforms array
   * 2. Return 'this' for chaining (builder pattern)
   */
  addTransform(fn: TransformFn): ExportPipeline {
    return this;
  }

  /**
   * Execute the full export pipeline.
   *
   * 1. Reset the data source
   * 2. Read batches using source.next(config.batchSize)
   * 3. For each record, run all transforms in order
   *    - If any transform returns null, the record is filtered out
   * 4. If config.columns specified, project only those columns
   * 5. Format output as CSV or JSON based on config.format
   * 6. Update progress throughout
   * 7. Return ExportResult
   */
  export(config: ExportConfig): ExportResult {
    return { output: '', progress: this.progress, duration: 0 };
  }

  /**
   * Format records as CSV string.
   *
   * 1. If includeHeaders, add column names as first row
   * 2. For each record, output values separated by commas
   * 3. Handle values containing commas by wrapping in quotes
   * 4. Return complete CSV string
   */
  private formatCsv(records: DataRecord[], columns: string[], includeHeaders: boolean): string {
    return '';
  }

  /**
   * Format records as JSON string.
   *
   * 1. Return JSON.stringify of the records array
   * 2. Use 2-space indentation for readability
   */
  private formatJson(records: DataRecord[]): string {
    return '';
  }

  getProgress(): ExportProgress {
    return { ...this.progress };
  }
}

export { ExportPipeline, ExportConfig, ExportProgress, ExportResult, TransformFn };
