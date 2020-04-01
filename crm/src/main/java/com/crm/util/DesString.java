package com.crm.util;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;

public class DesString {

	public static DES getDes(String strKey) {
		DES des = null;
		try {
			des = new DES(strKey);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return des;
	}

	/**
	 * 加密
	 * 
	 * @param te
	 *            （明文）
	 * @return 密文
	 */
	public static String encrypt(String te, String strKey) {
		return getDes(strKey).encrypt(te);
	}

	/**
	 * 解密
	 * 
	 * @param te
	 *            密文
	 * @return 明文
	 */
	public static String decrypt(String te, String strKey) {
		String result = null;
		try {
			result = getDes(strKey).decrypt(te);
		} catch (IllegalBlockSizeException e) {
			e.printStackTrace();
		} catch (BadPaddingException e) {
			e.printStackTrace();
		}
		return result;
	}
	public static void main(String[] args) {
		System.out.println(encrypt("fubon@Zhibao", "5df0232cade0ade515f758048a96a1f4"));
	}

}
