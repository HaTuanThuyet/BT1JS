// Mô Hình Ba Khối
/**Khối 1 : Đầu Vào
 *Nhập số n
 * Khối 2:
 * Bước 1: tạo 4 biến: n,unit,ten,sum;
 * 
 * 
 * Bước 2: Gán giá trị cho 1 biến :n;
 * Bước 3: tính số hàng chục theo công thức
 *        unit = Math.floor(n%10);
 * Bước 4 :tính số hàng đơn vị theo công thức
 *        ten =Math.floor(n/10);
 * Bước 5 tính tổng 2 số theo cong thức
 *        sum = unit + ten ;
 * Bước 6: In sum ra console
 * Khối 3
 * In kết Quả sum 
 * 
 */
var n,unit,ten,sum;
n = 12;
unit = Math.floor(n%10);
ten =Math.floor(n/10);
sum = unit + ten ;
console.log("Tổng 2 kí số là :" + sum);