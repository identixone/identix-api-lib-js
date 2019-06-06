import Api from "../../../../base/api";

const SOURCES = "sources/";

export default class Sources extends Api {
  static getSorceData = ({
    name,
    identify_resolution_threshold,
    pps_timestamp,

    manual_create_facesize_threshold,
    manual_create_on_ha,
    manual_create_on_junk,
    manual_check_liveness,
    manual_create_liveness_only,
    manual_check_asm,

    auto_create_persons,
    auto_create_facesize_threshold,
    auto_create_check_blur,
    auto_create_check_exp,
    auto_create_on_ha,
    auto_create_on_junk,
    auto_check_face_angle,
    auto_check_angle_threshold,
    auto_check_liveness,
    auto_create_liveness_only,
    auto_check_asm,

    store_images_for_confs,
    license_type,
  } = {}) => ({
    name,
    identify_resolution_threshold,
    pps_timestamp,

    manual_create_facesize_threshold,
    manual_create_on_ha,
    manual_create_on_junk,
    manual_check_liveness,
    manual_create_liveness_only,
    manual_check_asm,

    auto_create_persons,
    auto_create_facesize_threshold,
    auto_create_check_blur,
    auto_create_check_exp,
    auto_create_on_ha,
    auto_create_on_junk,
    auto_check_face_angle,
    auto_check_angle_threshold,
    auto_check_liveness,
    auto_create_liveness_only,
    auto_check_asm,

    store_images_for_confs,
    license_type,
  });

  getSources = filters => {
    const getFiltersData = ({ q, limit, offset } = {}) => ({
      q,
      limit,
      offset,
    });

    return this.httpClient.get(SOURCES, getFiltersData(filters));
  };

  getSource = id => {
    return this.httpClient.get(`${SOURCES}${id}/`);
  };

  createSource = (data = {}) => {
    return this.httpClient.post(SOURCES, Sources.getSorceData(data));
  };

  updateSource = ({ id, ...restData } = {}) => {
    return this.httpClient.put(
      `${SOURCES}${id}/`,
      Sources.getSorceData(restData)
    );
  };

  deleteSource = id => {
    return this.httpClient.delete(`${SOURCES}${id}/`);
  };
}
