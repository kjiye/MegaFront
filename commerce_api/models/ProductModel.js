const ProductModel = function () {
  const model = require("./Model");

  const get_product_list_ = (data, callback) => {
    let query = "";

    // type이 있는 경우와 없는 경우 각각 다른 sql문을 실행
    if (data.type) {
      query =
        "SELECT * FROM mega_prod p \
      JOIN mega_prod_type pt \
      ON p.prod_type_idx = pt.type_idx \
      WHERE pt.type_name=:type";
    } else {
      query = "SELECT * FROM mega_prod";
    }
    model.execute(query, data, callback);
  };

  const get_cart_product_list_ = (data, callback) => {
    // data.index는 장바구니 리스트에 들어있는 상품 번호 배열
    model.execute(
      "SELECT * FROM mega_prod WHERE prod_idx IN (" + data.index + ")",
      data,
      callback
    );
  };

  const get_type_list_ = (data, callback) => {
    // 타입 관리 테이블 목록 조회
    model.execute("SELECT * FROM mega_prod_type", data, callback);
  };

  const get_main_product_list_ = (data, callback) => {
    // 대표 상품의 기준을 인덱스 오름차순 기준 3개로 산정
    model.execute(
      "SELECT * FROM mega_prod p \
    JOIN mega_prod_type pt \
    ON p.prod_type_idx = pt.type_idx \
    WHERE pt.type_name=:type \
    LIMIT 0,3",
      data,
      callback
    );
  };

  const get_product_detail_ = (data, callback) => {
    model.execute(
      "SELECT * FROM mega_prod WHERE prod_idx=:prod_idx",
      data,
      callback
    );
  };

  return {
    getProductList: (data, callback) => get_product_list_(data, callback),
    getCartProductList: (data, callback) =>
      get_cart_product_list_(data, callback),
    getTypeList: (data, callback) => get_type_list_(data, callback),
    getMainProductList: (data, callback) =>
      get_main_product_list_(data, callback),
    getProductDetail: (data, callback) => get_product_detail_(data, callback),
  };
};

module.exports = ProductModel();
