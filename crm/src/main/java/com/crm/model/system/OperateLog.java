package com.crm.model.system;

import java.util.Date;

import com.jfinal.plugin.activerecord.Model;

public class OperateLog extends Model<OperateLog> {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1874950102356953078L;
	public static final OperateLog dao = new OperateLog();
	
	private long count_num;
	private long success_num;
	private long fail_num;
	private Date latest_time;
	private Date earliest_time;
	
	public long getCount_num() {
		return count_num;
	}
	public long setCount_num(long count_num) {
		return this.count_num = count_num;
	}
	public long getSuccess_num() {
		return success_num;
	}
	public void setSuccess_num(long success_num) {
		this.success_num = success_num;
	}
	public long getFail_num() {
		return fail_num;
	}
	public void setFail_num(long fail_num) {
		this.fail_num = fail_num;
	}
	public Date getLatest_time() {
		return latest_time;
	}
	public void setLatest_time(Date latest_time) {
		this.latest_time = latest_time;
	}
	public Date getEarliest_time() {
		return earliest_time;
	}
	public void setEarliest_time(Date earliest_time) {
		this.earliest_time = earliest_time;
	}
}
