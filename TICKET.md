# FINSERV-4261: Build bulk data export pipeline

**Status:** In Progress · **Priority:** High
**Sprint:** Sprint 30 · **Story Points:** 5
**Reporter:** Meera Sharma (Data Lead) · **Assignee:** You (Intern)
**Due:** End of sprint (Friday)
**Labels:** `backend`, `typescript`, `data`, `export`
**Task Type:** Feature Ship

---

## Description

The `DataSource` stub provides data. Build the `ExportPipeline` that reads data from a source, applies transformations (format, filter, redact), and streams it as CSV or JSON. Implement TODOs in `exportPipeline.ts`.

## Acceptance Criteria

- [ ] `export()` reads data and writes formatted output
- [ ] Supports CSV and JSON output formats
- [ ] `addTransform()` allows chaining transforms (filter, redact, rename)
- [ ] Export progress is tracked and reported
- [ ] All unit tests pass
