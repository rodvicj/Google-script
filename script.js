function login() {
  // const value = `=IF(AND(VLOOKUP(D7,ACCOUNTS!A:C,2,FALSE)=E7,VLOOKUP(D7,ACCOUNTS!A:C,3,FALSE)="Admin"),"Logged in as Admin",IF(VLOOKUP(D7,ACCOUNTS!A:C,2,FALSE)=E7,"Logged in","Invalid Credentials"))`;
  //get active sheet
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // update login status
  ss.getRange("F7:F7").setValue("login");

  // get Login logs sheet
  const sheet = ss.getSheetByName("Login logs");

  //get last number of rows
  const lastRow = sheet.getLastRow();

  //get username from dashboard
  const userName = ss.getRange("D7:D7").getValue();

  // Update logs
  //same as sheet.getRange("A2:A2").setValue(userName);
  sheet.getRange(`A${lastRow + 1}:A${lastRow + 1}`).setValue(userName);
  // add datetime of login
  sheet.getRange(`B${lastRow + 1}:B${lastRow + 1}`).setValue(new Date());
}

function logout() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.getRange("F7:F7").setValue("Logout");
  const sheet = ss.getSheetByName("Login logs");
  const lastRow = sheet.getLastRow();
  sheet.getRange(`C${lastRow}:C${lastRow}`).setValue(new Date());
  // sheet.getRange("F7:F7").setValue(lastRow);
}
