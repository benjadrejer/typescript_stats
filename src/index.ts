import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';
// import { WinsAnalysis } from './analyzers/WinsAnalysis';
// import { ConsoleReport } from './reportTargets/ConsoleReport';
// import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

// Inheritance reader:
// const reader = new MatchReader('original.csv');
// reader.read();

// const csvFileReader = new CsvFileReader('original.csv');
// const matchReader = new MatchReader(csvFileReader);
const shortcutMatchReader = MatchReader.fromCsv('original.csv');
shortcutMatchReader.load();

// const analyzer = new WinsAnalysis('Man United');
// const report = new ConsoleReport();
// const htmlReport = new HtmlReport('./report.html');
// const summary = new Summary(analyzer, report);
// summary.buildAndPrintReport(shortcutMatchReader.matches);

const shortcutSummary = Summary.winsAnalysisWithHtmlReport('West Ham');
shortcutSummary.buildAndPrintReport(shortcutMatchReader.matches);