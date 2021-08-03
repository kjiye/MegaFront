"use strict";

const Router = (app) => {
  const ProductController = require("./controllers/ProductController");

  // 상품리스트
  // params : type (new / best / md)
  app.get("/mega/product", (req, res) =>
    ProductController.appGetProductList(req, res)
  );

  // 장바구니 리스트
  // params : cartList [{prod_idx : 1, prod_qty : 1 }]
  app.get("/mega/cart/product", (req, res) =>
    ProductController.appGetCartProductList(req, res)
  );

  // 대표상품리스트
  app.get("/mega/main/product", (req, res) =>
    ProductController.appGetMainProductList(req, res)
  );

  // 상품 상세
  app.get("/mega/product/detail/:prod_idx", (req, res) =>
    ProductController.appGetProductDetail(req, res)
  );
};

module.exports = Router;
