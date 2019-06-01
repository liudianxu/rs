package com.crm.poi;

import java.io.InputStream;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

/**
 * 
 * @version: 1.00.00
 * @description: Excel导入工具类
 * @copyright: Copyright (c) 2017 易联众  All Rights Reserved
 * @company: 易联众健康医疗控股有限公司
 * @author: Rock
 * @date: 2017年9月25日 下午4:19:16
 * @history:
 */
public class ImportExcelUtil {

	private final static String excel2003L = ".xls"; // 2003- 版本的excel
	private final static String excel2007U = ".xlsx"; // 2007+ 版本的excel

//	private static FormulaEvaluator evaluator;
	/**
	 * 描述：获取IO流中的数据，组装成List<List<Object>>对象
	 * 
	 * @param in
	 * @param fileName
	 * @param rowIndex 从第几行开始读
	 * @return
	 * @throws Exception
	 */
	public List<List<Object>> getBankListByExcel(InputStream in, String fileName, int rowIndex)
			throws Exception {
		List<List<Object>> list = null;

		// 创建Excel工作薄
		Workbook work = this.getWorkbook(in, fileName);
		if (null == work) {
			throw new Exception("创建Excel工作薄为空！");
		}
//		evaluator = work.getCreationHelper().createFormulaEvaluator();
		Sheet sheet = null;
		Row row = null;
		Cell cell = null;

		list = new ArrayList<List<Object>>();
		// 遍历Excel中所有的sheet
		for (int i = 0; i < work.getNumberOfSheets(); i++) {
			sheet = work.getSheetAt(i);
			if (sheet == null) {
				continue;
			}

			// 遍历当前sheet中的所有行
			for (int j = rowIndex <= 0 ? sheet.getFirstRowNum() : (rowIndex - 1); j < sheet.getLastRowNum(); j++) {
				row = sheet.getRow(j);
				if (row == null || row.getFirstCellNum() == j) {
					continue;
				}

				// 遍历所有的列
				List<Object> li = new ArrayList<Object>();
				for (int y = row.getFirstCellNum(); y < row.getLastCellNum(); y++) {
					cell = row.getCell(y);
					//TODO 
					if(cell == null) continue;
					li.add(this.getCellValue(cell));
				}
				list.add(li);
			}
		}
		work.close();
		return list;
	}

	/**
	 * 描述：根据文件后缀，自适应上传文件的版本
	 * 
	 * @param inStr
	 *            ,fileName
	 * @return
	 * @throws Exception
	 */
	public Workbook getWorkbook(InputStream inStr, String fileName)
			throws Exception {
		Workbook wb = null;
		String fileType = fileName.substring(fileName.lastIndexOf("."));
		if (excel2003L.equals(fileType)) {
			wb = new HSSFWorkbook(inStr); // 2003-
//			evaluator = new HSSFFormulaEvaluator((HSSFWorkbook) wb);
		} else if (excel2007U.equals(fileType)) {
			wb = new XSSFWorkbook(inStr); // 2007+
//			evaluator = new XSSFFormulaEvaluator((XSSFWorkbook) wb);
		} else {
			throw new Exception("解析的文件格式有误！");
		}
		return wb;
	}

	/**
	 * 描述：对表格中数值进行格式化
	 * 
	 * @param cell
	 * @return
	 */
	public Object getCellValue(Cell cell) {
		Object value = null;
		DecimalFormat df = new DecimalFormat("0"); // 格式化number String字符
		SimpleDateFormat sdf = new SimpleDateFormat("yyy-MM-dd"); // 日期格式化
		DecimalFormat df2 = new DecimalFormat("0.00"); // 格式化数字

		switch (cell.getCellType()) {
		case Cell.CELL_TYPE_STRING:
			value = cell.getRichStringCellValue().getString();
			break;
		case Cell.CELL_TYPE_NUMERIC:
			if ("General".equals(cell.getCellStyle().getDataFormatString())) {
				value = df.format(cell.getNumericCellValue());
			} else if ("m/d/yy".equals(cell.getCellStyle()
					.getDataFormatString())) {
				value = sdf.format(cell.getDateCellValue());
			} else {
				value = df2.format(cell.getNumericCellValue());
			}
			break;
		case Cell.CELL_TYPE_BOOLEAN:
			value = cell.getBooleanCellValue();
			break;
//		case Cell.CELL_TYPE_FORMULA:
//			value = getCellValueFormula(cell, evaluator);
		case Cell.CELL_TYPE_BLANK:
			value = "";
			break;
		default:
			break;
		}
		return value;
	}
	
//	//处理公式
//    public String getCellValueFormula(Cell cell, FormulaEvaluator formulaEvaluator) {
//        if (cell == null || formulaEvaluator == null) {
//            return null;
//        }
//
//        if (cell.getCellType() == Cell.CELL_TYPE_FORMULA) {
//            return String.valueOf(formulaEvaluator.evaluate(cell).getNumberValue());
//        }
//        return String.valueOf(getCellValue(cell));
//    }

}
