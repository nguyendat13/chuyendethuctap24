import React from 'react'

const Checkout = () => {
  return (
    <section class="py-5">
    <div class="container">
      <div class="row">
        <h1 class="text-main">Thông tin giao hàng</h1>

        <div class="col-md-6">
          <form action="{{ route('site.cart.docheckout') }}" method="post">
            <div class="mb-3">
              <label for="name">Họ tên</label>
              <input
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="Nhập họ tên"
              />
            </div>
            <div class="mb-3">
              <label for="phone">Điện thoại</label>
              <input
                type="text"
                name="phone"
                id="phone"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="address">Địa chỉ</label>
              <input
                type="text"
                name="address"
                id="address"
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label for="note">Chú ý</label>
              <textarea
                name="note"
                id="note"
                rows="4"
                class="form-control"
              ></textarea>
            </div>
            <h4 class="fs-6 text-main mt-4">Phương thức thanh toán</h4>
            <div class="thanhtoan mb-4">
              <div class="p-4 border">
                <input
                  name="typecheckout"
                  onchange="showbankinfo(this.value)"
                  type="radio"
                  value="1"
                  id="check1"
                />
                <label for="check1">Thanh toán khi giao hàng</label>
              </div>
              <div class="p-4 border">
                <input
                  name="typecheckout"
                  onchange="showbankinfo(this.value)"
                  type="radio"
                  value="2"
                  id="check2"
                />
                <label for="check2">Chuyển khoản qua ngân hàng</label>
              </div>
              <div class="p-4 border bankinfo">
                <p>Ngân Hàng Techcombank </p>
                <p>STK: 10042004004</p>
                <p>Chủ tài khoản: Trần Đức Khánh</p>
              </div>
            </div>
            <div class="text-end">
              <button
                type="submit"
                class="btn btn-success px-4"
                name="XACNHAN"
              >
                XÁC NHẬN
              </button>
            </div>
          </form>
        </div>

        <div class="col-md-6">
          <h2 class="fs-5 text-main">Thông tin đơn hàng</h2>
          <table class="table table-bordered">
            <thead>
              <tr class="bg-light">
                <th>Hình</th>
                <th>Tên sản phẩm</th>
                <th class="text-center">Số lượng</th>
                <th class="text-center">Giá</th>
                <th class="text-center">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img class="img-fluid" src="images/product-1.png" />
                </td>
                <td class="align-middle">...</td>

                <td class="pt-4">
                  <div class="input-group">
                    <p class="d-flex justify-content-center">...</p>
                  </div>
                </td>
                <td class="text-center align-middle">1.000.000 ₫</td>
                <td class="text-center align-middle ">1.000.000 ₫</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="6" class="text-end">
                  <strong>Tổng tiền: 1.000.000 ₫</strong>
                </td>
              </tr>
            </tfoot>
          </table>
          <div>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Mã giảm giá"
                id="sale"
                aria-describedby="basic-addon2"
              />
              <button class="input-group-text" id="applyDiscount">
                Sử dụng
              </button>
            </div>
          </div>
          <table class="table table-borderless">
            <tr>
              <th>Tạm tính</th>
              <td class="text-end" id="subtotal">
                1.000.000 đ
              </td>
            </tr>
            <tr>
              <th>Phí vận chuyển</th>
              <td class="text-end">0 đ</td>
            </tr>
            <tr>
              <th>Giảm giá</th>
              <td class="text-end" id="discount">
                0 đ
              </td>
            </tr>
            <tr>
              <th>Tổng cộng</th>
              <td class="text-end font-weight-bold" id="total">
                1.000.000 đ
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Checkout
