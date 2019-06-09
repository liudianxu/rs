package com.crm.model.groupinfo;

import com.jfinal.plugin.activerecord.Model;

/**
 * 集团信息实体类
 * @author chenglongw
 * 
 */
public class GroupInfo extends Model<GroupInfo> {
	
	/** The Constant SCORE
	 * 评分（1：一星，2：二星，3：三星） */
	private static final String SCORE1 = "1";
	private static final String SCORE2 = "2";
	private static final String SCORE3 = "3";
	
	/** The Constant CERTTYPE. 
	 * 证件类型（0：营业执照，1：组织机构代码，2：税务登记证）*/
	private static final String CERTTYPE0 = "0";
	private static final String CERTTYPE1 = "1";
	private static final String CERTTYPE2 = "2";
	
	/** The Constant COMPANYNATURE. 
	 * 公司性质（0：合资，1：国企，2：民营）*/
	private static final String COMPANYNATURE0 = "0";
	private static final String COMPANYNATURE1 = "1";
	private static final String COMPANYNATURE2 = "2";

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public static final GroupInfo dao = new GroupInfo();
	

	/**
	 * 证件类型(字符串)
	 */
	private String certTypeStr;
	
	/**
	 * 公司性质(字符串)
	 */
	private String companyNatureStr;
	
	/**
	 * 评分(字符串)
	 */
	private String scoreStr;
	
	public String getCertTypeStr() {
		if(this.get("cert_type")!=null) {
		switch (this.get("cert_type").toString()) {
		case CERTTYPE0:
			certTypeStr ="营业执照";
			break;
		case CERTTYPE1:
			certTypeStr ="组织机构代码";
			break;
		case CERTTYPE2:
			certTypeStr ="税务登记证";
			break;

		default:
			break;
		}
		}
		return certTypeStr;
	}

	public void setCertTypeStr(String certTypeStr) {
		this.certTypeStr = certTypeStr;
	}

	public String getCompanyNatureStr() {
		if(this.get("company_nature")!=null) {
			switch (this.get("company_nature").toString()) {
			case COMPANYNATURE0:
				companyNatureStr ="合资";
				break;
			case COMPANYNATURE1:
				companyNatureStr ="国企";
				break;
			case COMPANYNATURE2:
				companyNatureStr ="民营";
				break;

			default:
				break;
			}
			}
			return companyNatureStr;
	}

	public void setCompanyNatureStr(String companyNatureStr) {
		this.companyNatureStr = companyNatureStr;
	}

	public String getScoreStr() {
		if(this.get("score")!=null) {
			switch (this.get("score").toString()) {
			case SCORE1:
				scoreStr ="一星";
				break;
			case SCORE2:
				scoreStr ="二星";
				break;
			case SCORE3:
				scoreStr ="三星";
				break;

			default:
				break;
			}
			}
		return scoreStr;
	}

	public void setScoreStr(String scoreStr) {
		this.scoreStr = scoreStr;
	}

}
