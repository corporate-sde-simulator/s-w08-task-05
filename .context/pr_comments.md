# PR Review - Data export and anonymization tool (by Amit Kumar)

## Reviewer: Ravi Iyer
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `DataExporter.java`

> **Bug #1:** Anonymization applies to export copy but also mutates the source record in memory
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `Anonymizer.java`

> **Bug #2:** Date anonymization shifts all dates by same offset so temporal relationships preserved making re-identification possible
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Amit Kumar**
> Acknowledged. I have documented the issues for whoever picks this up.
