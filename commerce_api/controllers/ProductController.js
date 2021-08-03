const ProductController = function () {
  const prod_model = require("../models/ProductModel");

  // 상품리스트 조회
  const appGetProductList = (req, res) => {
    let model_data = {};

    // 파라미터로 넘어온 타입 정보 추출
    // 있을 시 model에 보낼 객체에 해당 정보를 넣어서 쿼리 실행 시 활용할 수 있도록 처리
    // 없을 시 resolve
    const getType = () => {
      return new Promise((resolve) => {
        if (req.query.type) {
          model_data.type = req.query.type;
        }
        resolve();
      });
    };

    // 상품리스트를 조회하는 모델을 호출
    const getList = () => {
      return new Promise(() => {
        prod_model.getProductList(model_data, (err, rows) => {
          if (err) {
            res.json({
              result: false,
              msg: "INTERNAL_SERVER_ERR",
            });
          } else {
            res.json({
              result: true,
              msg: "SUCCESS",
              data: rows,
            });
          }
        });
      });
    };

    getType().then(() => getList());
  };

  // 장바구니 페이지에서 사용
  const appGetCartProductList = (req, res) => {
    let model_data = {};

    const { cartList } = req.query;

    // 모델에서 사용할 데이터 형식을 만듦
    // [ 1, 2, 3, 4, 5]
    const makeIndexArray = () => {
      return new Promise((resolve) => {
        model_data.index = [];
        cartList.forEach((v) => {
          model_data.index.push(parseInt(v.prod_idx));
        });
        resolve();
      });
    };

    const getProductList = () => {
      return new Promise((resolve) => {
        prod_model.getCartProductList(model_data, (err, rows) => {
          if (err) {
            res.json({
              result: false,
              msg: "INTERNAL_SERVER_ERR",
            });
          } else {
            resolve(rows);
          }
        });
      });
    };
    // 응답으로 보낼 데이터 생성
    // 상품 정보 리스트에 수량 정보 추가
    const sendResponse = (prod_list) => {
      let send_array = prod_list.map((v) => {
        let qty = 0;
        cartList.forEach((val) => {
          if (parseInt(val.prod_idx) === v.prod_idx) {
            qty = parseInt(val.prod_qty);
          }
        });
        v.prod_qty = qty;
        return v;
      });

      res.json({
        result: true,
        msg: "SUCCESS",
        data: send_array,
      });
    };

    makeIndexArray()
      .then(() => getProductList())
      .then((prod_list) => sendResponse(prod_list));
  };

  // 대표 상품 리스트를 반환
  // new_list, best_list, md_list
  const appGetMainProductList = (req, res) => {
    let model_data = {};
    let response_data = {};

    const getTypeList = () => {
      return new Promise((resolve) => {
        prod_model.getTypeList({}, (err, rows) => {
          if (err) {
            console.log(err);
            res.json({
              result: false,
              msg: "INTERNAL_SERVER_ERR",
            });
          } else {
            resolve(rows);
          }
        });
      });
    };

    const getProductList = (type_list) => {
      return new Promise((resolve) => {
        let total = type_list.length;
        let count = 0;
        let flag = true;

        const selecting = () => {
          model_data.type = type_list[count].type_name;
          console.log(model_data.type);
          prod_model.getMainProductList(model_data, (err, rows) => {
            if (err) {
              console.log(err);
              res.json({
                result: false,
                msg: "INTERNAL_SERVER_ERR",
              });
            } else {
              // new_list, best_list, md_list를 응답으로 보낼 객체에 추가
              response_data[model_data.type + "_list"] = rows;
              if (++count === total) {
                resolve();
              } else {
                selecting();
              }
            }
          });
        };
        flag && selecting();
      });
    };

    const response = () => {
      res.json({
        result: true,
        msg: "SUCCESS",
        data: response_data,
      });
    };

    getTypeList()
      .then((type) => getProductList(type))
      .then(() => response());
  };

  // 상품 상세 데이터 조회
  const appGetProductDetail = (req, res) => {
    const getDetail = () => {
      prod_model.getProductDetail(
        { prod_idx: req.params.prod_idx },
        (err, rows) => {
          if (err) {
            console.log(err);
            res.json({
              result: false,
              msg: "INTERNAL_SERVER_ERR",
            });
          } else {
            if (rows[0]) {
              res.json({
                result: true,
                msg: "SUCCESS",
                data: rows[0],
              });
            } else {
              res.json({
                result: false,
                msg: "NON_EXISTENCE",
              });
            }
          }
        }
      );
    };
    getDetail();
  };

  return {
    appGetProductList: (req, res) => appGetProductList(req, res),
    appGetCartProductList: (req, res) => appGetCartProductList(req, res),
    appGetMainProductList: (req, res) => appGetMainProductList(req, res),
    appGetProductDetail: (req, res) => appGetProductDetail(req, res),
  };
};

module.exports = ProductController();
