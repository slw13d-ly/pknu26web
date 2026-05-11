<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
request.setCharacterEncoding("UTF-8");

/* 가격 설정 */
int gift3 = 38000;
int gift5 = 52000;
int home3 = 30000;
int home4 = 47000;

/* 수량 초기화 */
int qty1 = 0;
int qty2 = 0;
int qty3 = 0;
int qty4 = 0;

/* 총가격 초기화 */
int total1 = 0;
int total2 = 0;
int total3 = 0;
int total4 = 0;

/* 파라미터가 null이 아니면 값 세팅 (빈 문자열 에러 방지 포함) */
if(request.getMethod().equalsIgnoreCase("POST")){
    String p1 = request.getParameter("qty1");
    String p2 = request.getParameter("qty2");
    String p3 = request.getParameter("qty3");
    String p4 = request.getParameter("qty4");

    if (p1 != null && !p1.trim().isEmpty()) qty1 = Integer.parseInt(p1);
    if (p2 != null && !p2.trim().isEmpty()) qty2 = Integer.parseInt(p2);
    if (p3 != null && !p3.trim().isEmpty()) qty3 = Integer.parseInt(p3);
    if (p4 != null && !p4.trim().isEmpty()) qty4 = Integer.parseInt(p4);

    total1 = qty1 * gift3;
    total2 = qty2 * gift5;
    total3 = qty3 * home3;
    total4 = qty4 * home4;
}
%>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>상품 주문</title>
    <style>
      /* 입력창과 버튼을 조금 더 깔끔하게 보이게 하는 약간의 스타일 */
      input[type="number"] {
        width: 60px;
        text-align: right;
      }
      .submit-btn {
        margin-top: 15px;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    
    <form action="test.jsp" method="post">
      <table width="100%" border="1" style="border-collapse: collapse;">
        <caption>
          <h3>선물용과 가정용 상품 구성</h3>
        </caption>
        
        <colgroup>
          <col style="background-color: bisque" />
          <col span="2" style="background-color: rgb(98, 142, 238)" />
          <col span="3" style="background-color: rgb(106, 203, 216)" />
        </colgroup>
        
        <thead>
          <tr>
            <th>용도</th>
            <th>중량</th>
            <th>과수(개수)</th>
            <th>상자가격</th>
            <th>주문 수량</th>
            <th>총 가격</th>
          </tr>
        </thead>
        
        <tbody style="text-align: center">
          <tr>
            <td rowspan="2">선물용</td>
            <td>3Kg</td>
            <td>11~16과</td>
            <td>38,000원</td>
            <td>
              <input type="number" name="qty1" min="0" value="<%= (qty1 > 0) ? qty1 : "" %>">
            </td>
            <td><%= total1 %> 원</td>
          </tr>
          <tr>
            <td>5Kg</td>
            <td>18~26과</td>
            <td>52,000원</td>
            <td>
              <input type="number" name="qty2" min="0" value="<%= (qty2 > 0) ? qty2 : "" %>">
            </td>
            <td><%= total2 %> 원</td>
          </tr>
          
          <tr>
            <td rowspan="2">가정용</td>
            <td>3Kg</td>
            <td>11~16과</td>
            <td>30,000원</td>
            <td>
              <input type="number" name="qty3" min="0" value="<%= (qty3 > 0) ? qty3 : "" %>">
            </td>
            <td><%= total3 %> 원</td>
          </tr>
          <tr>
            <td>4Kg</td>
            <td>18~26과</td>
            <td>47,000원</td>
            <td>
              <input type="number" name="qty4" min="0" value="<%= (qty4 > 0) ? qty4 : "" %>">
            </td>
            <td><%= total4 %> 원</td>
          </tr>
        </tbody>
      </table>
      
      <div style="text-align: center;">
        <input type="submit" value="총 가격 계산" class="submit-btn">
      </div>
      
    </form>

  </body>
</html>
