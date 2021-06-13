import { GoogleSpreadsheet } from 'google-spreadsheet'
import cred from '../service-account.json'
import _ from 'lodash'

class GoogleSheetDB {
  constructor(sheetID=process.env.REACT_APP_GOOGLESHEET_ID) {
    this.doc = new GoogleSpreadsheet(sheetID);
    this.ready = false;
  }
  async auth() {
    await this.doc.useServiceAccountAuth(cred);
    return this
  }
  async create(payload) {
    const sheet = this.doc.sheetsByIndex[0]
    // const rows = await sheet.getRows();
    return sheet.addRow(payload)
  }
  async save(id, payload) {
    await this.doc.loadInfo();
    const sheet = this.doc.sheetsByIndex[0]
    const rows = await sheet.getRows();
    let row = _.find(rows, { id });
    if (!row) {
      return sheet.addRow({
        ...payload,
        id
      })
      // return Promise.reject(new Error('id not exist'))
    } else {
      _.extend(row, payload)
      return row.save()
    }
  }
  async getRowIndex(id) {
    await this.doc.loadInfo();
    const sheet = this.doc.sheetsByIndex[0]
    const rows = await sheet.getRows();
    let row = _.find(rows, { id });
    return row.rowIndex
  }
}

export default GoogleSheetDB