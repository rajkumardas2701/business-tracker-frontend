import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import PropTypes from 'prop-types';
import '../styles/ExcelExport.css';

const ExcelExport = ({ excelData, fileName }) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <div>
      <button type="submit" onClick={() => exportToExcel(fileName)} className="excel-export">
        Export Txs
      </button>
    </div>
  );
};

ExcelExport.propTypes = {
  excelData: PropTypes.oneOfType([PropTypes.array]).isRequired,
  fileName: PropTypes.string.isRequired,
};

export default ExcelExport;
