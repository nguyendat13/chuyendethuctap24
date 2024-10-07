const Product =require('../models/Product')
const ProductController ={
    getAll:async(req,res)=>{
     
        await Product.getAll(function(products){
            const result={
                products:products,
                status:true,
                message:"tai du lieu thanh cong"
            }
            return res.status(200).json(result)
        })
    },
    delete:async(req,res)=>{
        const id= req.params.id
        await Product.delete(id,function(product){
            const result={
                product:product,
                status:true,
                message:'xoa thanh cong'
            }
            return res.status(200).json(result)
        })
    },
    store: async (req, res) => {
        const formBody = req.body;
        let image = req.files.image;
            image.mv("./assets/images/products/" + image.name, function (error) {
              if (error) throw error;
            });
        let d = new Date();
        //Lấy dũ liệu form
        const product = {
          name: formBody.name,
          slug:formBody.slug,
          image:formBody.image,
          category_id:formBody.category_id,
          brand_id:formBody.brand_id,
          detail:formBody.detail,
          description: formBody.description,
          price:formBody.price,
          pricesale:formBody.pricesale,
          status: formBody.status,
          created_at: `${d.getFullYear()}-${d.getMonth()}-${d.getDay()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
          created_by: 1,
        };
        await Product.store(product, function (data) {
          const result = {
            product: product,
            status: true,
            message: "Thêm dữ liệu thành công!",
          };
          return res.status(200).json(result);
        });
     
      },
      list: async (req, res) => {
        try {
          const page = req.params.page;
          
          const limit = req.params.limit;
          //Xử lý page
          const offset = (page - 1) * limit;
          //
          await Product.getList(limit, offset, function (products) {
            if (products == null) {
              const result = {
                products: null,
                status: false,
                message: "Không tìm thấy thông tin!",
              };
              return res.status(200).json(result);
            } else {
              const result = {
                products: products,
                status: true,
                message: "Tải dữ liệu thành công!",
              };
              return res.status(200).json(result);
            }
          });
        } catch (error) {
          const result = {
            products: null,
            status: false,
            message: error.message,
          };
          return res.status(200).json(result);
        }
      },
      productdetail:async(req,res)=>{
        try{
          const slug =req.params.slug
          const limit = req.params.limit
          await Product.getBySlug(slug,function(product){
            if(product == null){
              const result ={
                product:null,
                status:false,
                message:"khong tim thay thong tin"
              }
              return res.status(200).json(result)
            }else{
              Product.getProductDetail(
                product.category_id,
                product.id,
                limit,
                function(products){
                  const result={
                    product :product,
                    products:products,
                    status:true,
                    message:"tai du lieu thanh cong"
                  }
                  return res.status(200).json(result)
                }
              )
            }
          })
        }catch(error){
          const result={
            products:null,
            status:false,
            message:error.message
          }
          return res.status(200).json(result)
        }
      },
      list_category: async (req, res) => {
        try {
          const categoryid = req.params.categoryid;
          const limit = req.params.limit;
          await Product.getListByCategory(categoryid, limit, function (products) {
            if (products == null) {
              const result = {
                products: null,
                status: false,
                message: "Không tìm thấy thông tin!",
              };
              return res.status(200).json(result);
            } else {
              const result = {
                products: products,
                status: true,
                message: "Tải dữ liệu thành công!",
              };
              return res.status(200).json(result);
            }
          });
        } catch (error) {
          const result = {
            products: null,
            status: false,
            message: error.message,
          };
          return res.status(200).json(result);
        }
      },
      list_brand: async (req, res) => {
        try {
          const brandid = req.params.brandid;
          const limit = req.params.limit;
          await Product.getListByBrand(brandid, limit, function (products) {
            if (products == null) {
              const result = {
                products: null,
                status: false,
                message: "Không tìm thấy thông tin!",
              };
              return res.status(200).json(result);
            } else {
              const result = {
                products: products,
                status: true,
                message: "Tải dữ liệu thành công!",
              };
              return res.status(200).json(result);
            }
          });
        } catch (error) {
          const result = {
            products: null,
            status: false,
            message: error.message,
          };
          return res.status(200).json(result);
        }
      },
      list_product_category: async (req, res) => {
        try {
          const categoryid = req.params.categoryid;
          const page = req.params.page;
          const limit = req.params.limit;
          //Xử lý page
          let offset = (page - 1) * limit;
          //
          await Product.getListProductCategory(
            categoryid,
            limit,
            offset,
            function (products) {
              if (products == null) {
                const result = {
                  products: null,
                  status: false,
                  message: "Không tìm thấy thông tin!",
                };
                return res.status(200).json(result);
              } else {
                const result = {
                  products: products,
                  status: true,
                  message: "Tải dữ liệu thành công!",
                };
                return res.status(200).json(result);
              }
            }
          );
        } catch (error) {
          const result = {
            products: null,
            status: false,
            message: error.message,
          };
          return res.status(200).json(result);
        }
      },
}
module.exports=ProductController