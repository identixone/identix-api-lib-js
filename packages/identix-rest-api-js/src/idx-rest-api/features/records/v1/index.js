import Api from "../../../../base/api";

const RECORDS = "records/";

export default class Records extends Api {
  static getFiltersData = ({
    is_new,
    reinit,
    exact,
    ha,
    junk,
    nm,
    det,
    id,
    period_start,
    period_end,
    source,
    qty,
    pgn_start,
    last,
  } = {}) => ({
    new: is_new,
    reinit,
    exact,
    ha,
    junk,
    nm,
    det,
    id,
    period_start,
    period_end,
    source,
    qty,
    pgn_start,
    last,
  });

  getRecords = filters => {
    return this.httpClient.get(RECORDS, Records.getFiltersData(filters));
  };

  getRecordsByPersonId = ({ personId, filters } = {}) => {
    return this.httpClient.get(
      `${RECORDS}${personId}/`,
      Records.getFiltersData(filters)
    );
  };

  deleteRecord = id => {
    return this.httpClient.delete(`entry/${id}/`);
  };
}
