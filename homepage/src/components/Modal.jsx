import React, { forwardRef } from "react";
import styled from "styled-components";
import icon from "../assets/modal/icon.png";

const Modal = forwardRef(
  ({ isModal, isFirstModal, isSecondModal, isThirdModal }, ref) => {
    console.log(isFirstModal);
    console.log(isSecondModal);
    console.log(isThirdModal);
    return (
      <ModalContainer ref={ref}>
        <Container>
          <ModalHeader>
            <LogoImg src={icon} />
            <Close onClick={isModal}>X</Close>
          </ModalHeader>
          {isFirstModal && (
            <TextArea>
              <Title>*누림이란?</Title>
              <Content>
                “생활속에서 마음것 즐기거나 맛보다” 라는 뜻을 가지고있는 순
                우리말입니다.
              </Content>
              <Title>*마시고 싶은 전통 주류 어디서 마실 수 있을까?</Title>
              <Content>
                누림에서는 사용자가 마시고 싶은 전통 주류에 대한 설명과 해당
                주류를 생산하는 양조장의 정보 및 판매하는 음식점의 정보를
                제공하고 있습니다.
              </Content>
              <Title>*내 주변 전통 주류를 판매하는 음식점은?</Title>
              <Content>
                GPS 위치 서비스를 기반으로 내 주변의 전통 주류를 판매하는
                음식점에 대한 정보를 제공하고 있어 전통 주류 애호가라면 누구든
                특정 제품만이 아니라 내 주변의 전통 주류 판매처를 찾아볼 수
                있습니다.
              </Content>
              <Title>*홍보 효과!</Title>
              <Content>
                전통 주류를 생산 혹은 판매하는 등 전통 주류와 연관된 사업체를
                운영중인 사업주 분들은 앱 내에서 홍보가 가능합니다.
              </Content>
            </TextArea>
          )}
          {isSecondModal && (
            <TextArea>
              <Title>*앞으로의 누림</Title>
              <Content>
                누림은 전통문화 플랫폼으로써 우리 문화 시장의 성장과 발전을 위한
                세계 최고의 플랫폼으로 성장하고 우리가 지켜야 할 우리 문화를 더
                널리 알릴 수 있도록 이끌어 나갈겁니다.
              </Content>
              <Title>*누림의 방향성</Title>
              <Content>
                누림은 우리 문화를 알리고 발전을 위한 플랫폼으로 많은 사람들이
                보다 쉽게 우리 문화에 다가갈 수 있는 새로운 문화를 창도 해나가려
                합니다.
              </Content>
              <Title>🛣️ 누림의 목표</Title>
              <Content>
                -<ins>앞으로의 누림이 나아가고자 하는 목표를 소개합니다.</ins>
              </Content>
              <Content></Content>
              <Content>
                전통 주류를 시작으로 우리 문화 시장의 성장과 발전에 기여하고
                최고의 플랫폼이 돼보자!
              </Content>
              <Content>
                국내에 우리 문화를 한 곳에서 즐길 수 있는 테마파크를 건설!
              </Content>
              <Content>
                국내외 모두가 우리 문화를 알고 즐길 수 있도록 만들자!
              </Content>
              <Content>
                외국인 및 해외 거주하는 교민들도 우리 문화를 찾고 즐길 수 있게
                하자!!
              </Content>
              <Title>🤙 누림의 약속</Title>
              <Content>
                -<ins>누림이 크게 성장해도 변하지 않고 지켜나갈 것을 약속 드립니다.</ins>
              </Content>
              <Content></Content>
              <Content>
                임직원 모두가 우리 문화를 사랑하고 지켜나가겠습니다.
              </Content>
              <Content>
                우리 문화가 더 큰 발전을 이룰 수 있는 환경을 위해
                움직이겠습니다.
              </Content>
              <Content>
                하나의 카테고리에 치우치지 않고 공정한 관리를 하겠습니다.
              </Content>
              <Title>💥 누림의 카테고리</Title>
              <Content>
                -<ins>누림이 앞으로 함께 키워나갈 카테고리를 소개합니다.</ins>
              </Content>
              <Content></Content>
              <Content>한옥(카페, 펜션 등)</Content>
              <Content>
                "한옥으로 이루어져 있고 한옥 체험이 가능한 장소를 소개합니다."
              </Content>
              <Content></Content>
              <Content>도자기(도자기 공방, 도자기 판매점 등)</Content>
              <Content>
                "도자기 만들기나 인테리어를 위한 도자기를 구매할 수 있는 곳들을
                소개합니다."
              </Content>
              <Content></Content>
              <Content>한복(한복 판매점, 한복 대여점 등)</Content>
              <Content>
                "전통 한복부터 퓨전 한복까지 여러 종류를 입어볼 수 있거나
                판매하는 곳들을 소개합니다."
              </Content>
              <Content></Content>
              <Content>한과(한과 공방, 한과 판매점 등)</Content>
              <Content>
                "전통 한과를 만들어볼 수 있고 구매할 수 있는 곳들을 소개합니다."
              </Content>
              <Content></Content>
              <Content>한식(한식당)</Content>
              <Content>
                "전통 한식을 맛볼 수 있고 즐길 수 있는 음식점을 소개합니다."
              </Content>
            </TextArea>
          )}
          {isThirdModal && (
            <TextArea>
              <Title>*이용약관</Title>
              <br />
              <Content>제 1조 (목적)</Content>
              <Content>
                이 약관은 사업자 오씨(Our Culture)(이하 "회사"라 합니다)이
                제공하는 누림 서비스(이하 "서비스"라 합니다)와 관련하여, 회사와
                이용 고객간에 서비스의 이용조건 및 절차, 회사와 회원간의 권리,
                의무 및 기타 필요한 사항을 규정함을 목적으로 합니다. 본 약관은
                PC통신, 스마트폰(안드로이드폰, 아이폰 등) 앱 등을 이용하는
                전자상거래에 대해서도 그 성질에 반하지 않는 한 준용됩니다.
              </Content>
              <Content>제 2 조 (용어의 정의) </Content>
              <Content>
                1 "사이트"란 업주가 재화 또는 상폼의 정보(이하 "재화 등"이라
                합니다)를 "이용자"에게 제공하기 위하여, "회사"가 컴퓨터 등
                정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정하여
                제공하는 가상의 영업장을 말합니다.
              </Content>
              <Content>
                2. "회원"이라 함은 "누림"의 개인정보를 제공하여 회원등록을 한
                자로서 "누림"의 정보를 지속적으로 제공받으며, "누림"이 제공하는
                서비스를 계속적으로 이용할 수 있는 자를 의미하고, "누림"
                광고업소는 포함되지 않습니다.
              </Content>
              <Content>
                3. "비회원"이라 함은 "회원"으로 가입하지 않고 "회사"가 제공하는
                서비스를 이용하는 자를 말합니다.{" "}
              </Content>
              <Content>
                4. "이용자"라 함은 누림 서비스를 이용하는 자를 말하며, 회원과
                비회원을 모두 포함합니다.{" "}
              </Content>
              <Content>
                5. "비밀번호(Password)"라 함은 회원의 동일성 확인과 회원의 권익
                및 비밀보호를 위하여 회원 스스로가 설정하여 사이트에 등록한
                영문과 숫자 등의 조합을 말합니다.{" "}
              </Content>
              <Content>
                6. "게시물"이라 함은 "회원"이 서비스를 이용함에 있어 서비스 상에
                게시한 부호 · 문자 · 음성 · 음향 · 화상 · 동영상 등의 정보
                형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다.{" "}
              </Content>
              <Content>
                7. "업주"란 "회사"가 제공하는 "서비스"를 이용해 "재화 등"에 관한
                정보를 게재하고, 홍보 및 판매하는 주체를 말합니다.
              </Content>
              <Content>제 3 조 (약관의 명시와 개정)</Content>
              <Content>
                1. "회사"는 이 약관의 내용과 상호, 영업소 소재지 주소(소비자의
                불만을 처리할 수 있는 곳 주소를 포함), 대표자의 성명,
                사업자등록번호, 연락처(전화, 전자우편 주소 등) 등을 "이용자"가
                쉽게 알 수 있도록 "사이트"의 초기 서비스화면(전면)에 게시합니다.
                다만, 약관의 내용은 "이용자"가 연결화면을 통하여 보도록 할 수
                있습니다.
              </Content>
              <Content>
                2. "회사"는 『전자상거래 등에서의 소비자보호에 관한 법률』,
                『전자문서 및 전자거래 기본법』, 『전자서명법』, 『전자통신망
                이용촉진 등에 관한 법률』, 『소비자기본법』등 관련법령을
                위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
              </Content>
              <Content>
                3. "회사"는 약관을 개정할 경우에는 적용일자 및 개정사유를
                명시하여 현행약관과 함께 "사이트"의 초기화면에 그 적용일자 7일
                이전부터 적용일자 전일까지 공지합니다. 다만, "이용자"에게
                불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전
                유예기간을 두고 공지합니다. 이 경우 "회사"는 개정 전과 개정 후
                내용을 "이용자"가 알기 쉽도록 표시합니다.
              </Content>
              <Content>
                4. "회원"은 변경된 약관에 동의하지 않을 권리가 있으며, 변경된
                약괸에 동의하지 않을 경우에는 서비스 이용을 중단하고 탈퇴할 수
                있습니다. 다만, "이용자"가 제3항의 방법 등으로 "회사"가 별도
                고지한 약관 개정 공지 기간 내에 "회사"에 개정 약관에 동의하지
                않는다는 명시적인 의사 표시를 하지 않는 경우 변경된 약관에
                동의한 것으로 간주 합니다.
              </Content>
              <Content>
                5. 이 약관에서 정하지 아니한 사항과 이 약관의 해석에 관하여는
                『전자상거래 등에서의 소비자 보호에 관한 법률』, 『약관의 규제
                등에 관한 법률』 공정거래위원회가 정하는 『전자상거래 등에서의
                소비자보호지침』 및 관계 법령 또는 상관례에 따릅니다.
              </Content>
              <Content>제 4 조 (관련법령과의 관계)</Content>
              <Content>
                {" "}
                이 약관 또는 개별약관에서 정하지 않은 사항은 전기통신사업법,
                전자거래기본법, 정보통신망법, 전자상거래 등에서의 소비자보호에
                관한 법률, 개인정보보호법 등 관련 법령의 규정과 일반적인
                상관례에 의합니다.
              </Content>
              <Content>제 5 조 (서비스의 제공 및 변경)</Content>
              <Content>
                1. "회사"는 다음과 같은 서비스를 제공합니다. 1)"재화 등"에 대한
                광고플랫폼 서비스
              </Content>
              <Content>2. 위치기반 서비스</Content>
              <Content>
                3. 회원의 구매, 검색 등 서비스 이용기록에 따른 "재화 등"의
                개인화 추천 서비스
              </Content>
              <Content>4. 기타 "회사"가 정하는 서비스</Content>
              <Content>
                5. "회사"는 서비스 제공과 관련한 회사 정책의 변경 등 기타 상당한
                이유가 있는 경우 등 운영상, 기술상의 필요에 따라 제공하고 있는
                "서비스"의 전부 또는 일부를 변경 또는 중단할 수 있습니다. 3
                "서비스"의 내용, 이용방법, 이용시간에 대한 변경 또는 "서비스"
                중단이 있는 경우에는 변경 또는 중단될 "서비스"의 내용 및 사유와
                일자 등은 그 변경 또는 중단 전에 회사 "웹사이트" 또는 "서비스"
                내 "공지사항" 화면 등 "회원"이 충분히 인지할 수 있는 방법으로
                사전에 공지합니다. 다만, 회원 본인의 거래와 관련하여 서비스의
                중단 등 중대한 영향을 미치는 사항들에 대하여는 제15조 제1항에서
                규정한 방법으로 개별 통지를 합니다.
              </Content>
              <Content>제 6 조 (서비스 이용시간 및 중단)</Content>
              <Content>
                1. 서비스"의 이용은 "회사"의 업무상 또는 기술상 특별한 지장이
                없는 한 연중무휴 1일 24시간을 원칙으로 합니 다. 다만, 정기 점검
                등의 필요로 "회사"가 정한 날이나 시 간은 제외됩니다. 점검시간은
                서비스제공화면에 공지 한 바에 따릅니다.
              </Content>
              <Content>
                2. "회사"는 "서비스"의 원활한 수행을 위하여 필요한 기간 을
                정하여 사전에 공지하고 서비스를 취소, 중지 또는 일시 제한할 수
                있습니다.
              </Content>
              <Content>
                3. "회사"는 컴퓨터 등 정보통신설비의 보수점검•교체 및 고장,
                통신의 두절 등의 사유가 발생한 경우에는 "서비스" 의 제공을
                일시적으로 중단할 수 있습니다.
              </Content>
              <Content>
                4. "회사"는 본 조에 의하여 본 서비스가 취소, 중단 또는 일시
                제한될 경우 "이용자" 또는 "제3자"의 손해에 "회사" 의 고의 또는
                과실이 없는 한 배상할 책임을 지지 않습니 다. 다만, "회사"는
                손해배상책임과 무관하게 "이용자"가 겪었을 불편함을 위로하는
                차원에서 쿠폰 등을 지급할 수 있습니다.
              </Content>
              <Content>제 7 조 (이용계약의 성립)</Content>
              <Content>
                1. 이용계약은 "회원"이 되고자 하는 자(이하 가입신청 자")가
                약관의 내용에 동의를 하고, "회사"가 정한 가입 양식에 따라
                회원정보를 기입하여 회원가입신청을 하고 "회사"가 이러한 신청에
                대하여 승인함으로써 체결됩니다.
              </Content>
              <Content>
                2. "회사"는 다음 각 호에 해당하는 신청에 대하여는 승인 을 하지
                않을 수 있습니다.
              </Content>
              <Content>
                3. 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실 한 적이
                있는 경우. 다만, 회원자격 상실 후 3년이 경과한 자로서 회사의
                회원 재가입 승낙을 얻은 경우에는 예외로 함
              </Content>
              <Content>4. 실명이 아니거나 타인의 명의를 이용한 경우</Content>
              <Content>
                5. 회사가 실명확인절차를 실시할 경우에 이용자의 실명가입신청이
                사실 아님이 확인된 경우
              </Content>
              <Content>
                6. 등록내용에 허위의 정보를 기재하거나, 기재누락, 오기 가 있는
                경우
              </Content>
              <Content>
                7. 이미 가입된 회원과 전화번호나 전자우편주소가 동일하 거나
                실명확인정보 또는 본인인증정보 등 회원을 식별하기 위한 정보가
                동일한 경우
              </Content>
              <Content>
                8. 부정한 용도 또는 영리를 추구할 목적으로 본 서비스를
                이용하고자 하는 경우
              </Content>
              <Content>
                9. 만14세 미만 아동이 법정대리인의 동의 없이 가입한 것 으로
                확인된 경우
              </Content>
              <Content>
                10. 기타 이 약관에 위배되거나 위법 또는 부당한 이용신청 임이
                확인된 경우 및 이에 준하는 사유가 발생한 경우
              </Content>
              <Content>
                11. 제1항에 따른 신청에 있어 "회사"는 "회원"에게 전문기 관을
                통한 실명확인 및 본인인증을 요청할 수 있습니다.
              </Content>
              <Content>
                12. 회사"는 서비스관련설비의 여유가 없거나, 기술상 또는 업무상
                문제가 있는 경우에는 승낙을 유보할 수 있습니다.
              </Content>
              <Content>
                13. "회원"은 회원가입 시 등록한 사항에 변경이 있는 경 우, 상당한
                기간 이내에 "회사"에 대하여 회원정보 수정 등의 방법으로 그
                변경사항을 알려야 합니다.
              </Content>
              <Content>제 8 조 (이용계약의 종료)</Content>
              <Content>1. "회원"의 해지</Content>
              <Content>
                2. "회원"은 언제든지 "회사"에게 해지의사를 통지함으로 써
                이용계약을 해지할 수 있습니다.
              </Content>
              <Content>
                3. "회사"는 제 1호에 따른 "회원"의 해지요청에 대해 특별 한
                사정이 없는 한 이를 즉시 처리합니다.
              </Content>
              <Content>
                4. "회원"이 계약을 해지하는 경우 "회원"이 작성한 게시 물은
                삭제되지 않습니다.
              </Content>
              <Content>5. "회사"의 해지</Content>
              <Content>
                6. "회사"는 다음과 같은 사유가 있는 경우 이용계약을 해 지할 수
                있습니다. 가. 제7조 제2항에서 정하고 있는 이용계약의 승낙거부사
                유가 있음이 확인된 경우 나. "회원"이 "회사"나 다른 회원 기타
                타인의 권리나 명 예, 신용 기타 정당한 이익을 침해하는 행위를
                하였다고 합 리적으로 판단되는 경우 다. 1년 이상 서비스를 이용한
                이력이 없는 경우 라. 기타 "회원"이 이 약관에 위배되는 행위를
                하거나 이 약 관에서 정한 해지사유가 발생한 경우
              </Content>
              <Content>
                7. "회사"는 제8조 제2항 제1호 가, 다, 라 목의 사유가 발 생한
                경우 "회원"에게 사전 통보 후 계약을 해지할 수 있으 며, 나 목의
                사유가 발생한 경우에는 사전통보 없이 계약을 해지할 수 있습니다.
                계약 해지에 관한 통지를 하는 경우 제 15조 제1항에서 정한 통지
                방법으로 합니다.
              </Content>
              <Content>
                8. 해지를 통지 받은 "회원"은 해지에 이의를 제기하고자 하는 경우
                "회사"의 고객센터에 문의할 수 있습니다.
              </Content>
              <Content>제 9 조 (회원의 ID 및 비밀번호에 대한 의무)</Content>
              <Content>
                1. ID와 비밀번호에 관한 관리책임은 "회원"에게 있습니다.
              </Content>
              <Content>
                2. "회원"은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는
                안됩니다.
              </Content>
              <Content>
                3. "회원"이 자신의 ID 및 비밀번호를 도난 당하거나 제3자 가
                사용하고 있음을 인지한 경우에는 즉시 "회사"에 통보하 고 "회사"의
                조치가 있는 경우에는 그에 따라야 합니다.
              </Content>
              <Content>
                4. "회원이 제3항에 따른 통지를 하지 않거나 회사"의 조 치에
                응하지 아니하여 발생하는 모든 불이익에 대한 책임은 "회원"에게
                있습니다.
              </Content>
              <Content>제 10 조 (회원 및 이용자의 의무)</Content>
              <Content>
                1. "이용자"는 관계법령 및 이 약관의 규정을 준수하여야 하며, 기타
                "회사" 업무에 방해되는 행위를 하여서는 안됩니다.
              </Content>
              <Content>
                2. "이용자"는 서비스 이용과 관련하여 다음 각 호의 행위 를
                하여서는 안됩니다. 이 때, 각 호의 행위에 관한 구체적 인 내용에
                대해서는 회사"의 정책, 이용안내 등에 따릅니 다.
              </Content>
              <Content>3. 서비스 신청 또는 변경 시 허위내용의 등록</Content>
              <Content>4. "회사"에 게시된 정보의 허가 받지 않은 변경</Content>
              <Content>
                5. "회사"가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신
                또는 게시
              </Content>
              <Content>
                6. "회사" 또는 제3자의 저작권 등 지적 재산권에 대한 침해
              </Content>
              <Content>
                7. "회사 또는 제3자의 명예를 손상시키거나 업무를 방해 하는 행위
              </Content>
              <Content>
                8. 외설 또는 폭력적인 메시지, 화상, 음성 기타 공공질서
                미풍양속에 반하는 정보를 서비스"에 공개 또는 게시하는 행위
              </Content>
              <Content>
                9. 고객센터 상담 내용이 욕설, 폭언, 성희롱 등에 해당하는 행위
              </Content>
              <Content>
                10. 포인트를 부정하게 적립하거나 사용하는 등의 행위
              </Content>
              <Content>
                11. 허위 주문, 허위 리뷰작성 등을 통해 서비스를 부정한 목 적으로
                이용하는 행위
              </Content>
              <Content>
                12. 정당한 사유 없이 당사의 영업을 방해하는 내용을 기재 하는
                행위
              </Content>
              <Content>13. 기타 관계법령에 위반된다고 판단되는 행위</Content>
              <Content>
                14. "회사"는 이용자가 본 조 제2항의 금지행위를 한 경우 본 약관
                제 13조에 따라 서비스 이용 제한 조치를 취할 수 있습니다.
              </Content>
              <Content>제 10 조의 2 (데이터 보호에 대한 특칙)</Content>
              <Content>
                1. "회사"는 "서비스"를 운영하면서 구축되는 데이터 베이스에
                전통주, 양조장, 음식점에 대한 사진, 문자, 부호, 링크 등으로
                구성된 콘텐츠 자체 또는 robots.txt 파일 또는 접근제어, 보안설정
                등의 보호장치로써 이를 보호하고 있습니다. 따라서 콘텐츠 또는
                robots.txt 파일 또는 접근제어, 보안설정으로 보호되고 있는 데이터
                베이스에 접근하여 이를 수집하는 행위를 원칙적으로 불허합니다.
              </Content>
              <Content>
                2. 그외 "회사"는 "회사"의 데이터(데이터 베이스를 포 함. 이하
                같음) 보호와 관련하여 아래 사항을 불허하며, 이를 위반할 경우
                "이용자"의 경우 본 약관에서 정한 조치를, "이용자"가 아닐 경우
                법적 조치를 포함하여 접근 차단 조치를 취할 수 있습니다.
              </Content>
              <Content>
                3. 자신의 ID, PW를 제3자에게 양도, 대여하거나 단순 이 용하도록
                하는 행위
              </Content>
              <Content>
                4. 정당한 접근권한 없이 또는 허용된 접근권한을 넘어 "회
                사""서비스의 정보통신망에 침입하는 행위 (ID, PW를 양도, 대여받아
                사용하는 행위를 포함).
              </Content>
              <Content>
                5. "회사"의 상당한 투자나 노력으로 만들어진 성과를 무단
                사용하거나 부정하게 사용하는 행위
              </Content>
              <Content>
                6. 리버스엔지니어링, 디컴파일, 디스어셈블 및 기타 일체 의
                가공행위를 통해 "서비스" 또는 데이터를 복제, 분해, 모 방 또는
                기타의 방법으로 변형하는 행위
              </Content>
              <Content>
                7. 자동 접속 프로그램 또는 해킹 프로그램 등을 사용하는 등
                "회사"가 제공하지 않은 일체의 크롤링 방법을 통하여 "회사"의
                앱/웹/서버에 접근하여 데이터를 수집, 이용하는 행위
              </Content>
              <Content>
                8. "회사"의 "서비스" 제공 목적과 부합하지 않는 목적으
                로"서비스를 이용하여 "회사"의 서버, DB 등 정보처리자 원을
                소모하게 하는 행위
              </Content>
              <Content>
                9. 기타 형법, 저작권법, 정보통신망 이용촉진 및 정보보호 등에
                관한 법률, 전기통신사업법, 개인정보보호법, 부정경 쟁방지 및
                영업비밀보호에 관한 법률 등 관련 법령에 위반 되는 행위
              </Content>
              <Content>제 11 조(회원의 게시물)</Content>
              <Content>
                1. "회원"이 작성한 게시물에 대한 저작권은 회원에게 있으 며, 해당
                게시물의 저작권 침해를 비롯한 민•형사상 모든 책임은 "회원"에게
                있습니다.
              </Content>
              <Content>
                2. "회사"는 "회원"이 게시하거나 등록하는 게시물의 내용 이 다음
                각 호에 해당한다고 판단되는 경우 해당 게시물을 사전통지 없이
                삭제, 차단, 임시조치(블라인드)할 수 있 고, 조치 후 "회사"는
                "회원"에게 지체 없이 그 사유를 통지 합니다. 이러한 조치들에 대해
                "회원"은 배달의민족 고객센 터를 통해 이의를 제기하실 수
                있습니다.
              </Content>
              <Content>3. 특정인의 개인정보를 노출한 경우</Content>
              <Content>
                4. 사람을 비방할 목적으로 공공연하게 사실이나 거짓의 사 실을
                드러내어 타인의 명예를 훼손하거나 타인의 사생활을 침해하는
                내용인 경우
              </Content>
              <Content>5. 공공질서 및 미풍양속에 위반되는 내용일 경우</Content>
              <Content>
                6. 범죄를 목적으로 하거나 교사 또는 방조하는 내용인 경 우
              </Content>
              <Content>
                7. "회사" 또는 제3자의 저작권, 상표권 등 지식재산권을 침해하는
                내용인 경우
              </Content>
              <Content>
                8. "회원"이 음란한 부호 문언• 음향 · 화상 또는 영상을 게시하거나
                이와 관련된 사이트를 링크하는 경우
              </Content>
              <Content>
                9. 공포심 또는 불안감을 유발하는 부호• 문언• 음향 • 화 상 또는
                영상을 반복적으로 상대방에게 도달하도록 하는 내 용인 경우
              </Content>
              <Content>10. 정치적, 사회적 분쟁을 야기하는 내용인 경우</Content>
              <Content>
                11. 정당한 사유 없이 정보통신시스템, 데이터 또는 프로그 램 등을
                훼손 • 멸실 • 변경 • 위조하거나 그 운용을 방해하 는 내용인 경우
              </Content>
              <Content>
                12. 법령에 따라 금지되는 사행행위에 해당하는 내용인 경우
              </Content>
              <Content>
                13. 회사로부터 사전 승인 받지 아니한 상업광고, 판촉 내용 을
                게시하는 경우
              </Content>
              <Content>
                14. 게시판의 목적에 부합하지 않거나 회사" 또는 "업주" 가
                제공하는 서비스 및 상품과 관련 없는 내용인 경우
              </Content>
              <Content>
                15. 정당한 사유 없이 "회사" 또는 '업주"의 영업을 방해하 는
                내용을 기재하는 경우
              </Content>
              <Content>
                16. 관계법령, 약관, 운영정책 등 위반행위를 할 우려가 있 거나
                위반행위를 한 경우
              </Content>
              <Content>
                17. 기타 위 각 호의 사유에 준하는 사유가 발생한 경우
              </Content>
              <Content>제 12 조(회원게시물의 관리)</Content>
              <Content>
                1. "회원"의 "게시물이 정보통신망법 및 저작권법 등 관련 법령에
                위반되는 내용을 포함하는 경우, 이로 인하여 권리 를 침해 받은
                자(이하 "권리침해 주장자"라 합니다)는 관련 법령이 정한 방법과
                절차에 따라 권리침해사실을 소명하여 해당 게시물"의 삭제 또는
                게시중단 등을 요청할 수 있습 니다.
              </Content>
              <Content>
                2. 회사는 제1항에 따른 요청을 받으면 관련법령에 따라 지 체없이
                삭제 또는 게시중단 등 필요한 조치를 하고 "권리침 해 주장자"와
                해당 게시물" 작성자에게 알려야 합니다.
              </Content>
              <Content>
                3. "게시물" 작성자로부터 제2항의 게시중단에 대한 이의 신청이
                접수되면 회사는 게시중단 조치를 해지(게시물을 복원)할 수 있으며,
                이러한 이의신청 없이 게시중단 기간이 경과한 경우에는 회사는 해당
                "게시물"을 영구적으로 차단 할 수 있습니다.
              </Content>
              <Content>
                4. 회사는 제1항에 따른 "권리침해 주장자"의 요청이 없는 경우라도
                권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및
                관련법령에 위반되는 경우에는 관련법령에 따라 해 당 "게시물"을
                삭제 또는 게시중단 할 수 있습니다.
              </Content>
              <Content>
                5. "회원"은 "회사"에게 회원"의 "게시물"을 복제, 공중 송신, 전시,
                배포 및 수정이나 편집 등을 통한 2차적 저작물 또는 편집저작물을
                작성할 권한을 부여하고, "회사"는 "회 원"이 부여한 권한에 따라
                "회사"가 제공하는 서비스 내에 서"회원"의 게시물을 서비스 운영 및
                개선, 신규 서비스 개발, 홍보 등의 목적으로 사용할 수 있습니다.
                다만, "게시 물"을 등록한 "회원"은 "회사"에 대하여 자신의 "게시
                물"의 삭제 또는 사용 중지를 요청할 수 있습니다.
              </Content>
              <Content>
                6. 본 조에 따른 세부절차는 정보통신망법 및 저작권법 등
                관련법령이 규정한 범위 내에서 회사가 정한 배달의민족 리 뷰
                운영정책에 따릅니다.
              </Content>
              <Content>* 게시중단요청 : arirang5590@gmail.com</Content>
              <Content></Content>
              <Content>제 13 조 (이용제한 등)</Content>
              <Content>
                1. "회사"는 "이용자"가 이 약관의 의무를 위반하거나 "서비스의
                정상적인 운영을 방해한 경우, 주의, 경고, 일시정 지,
                영구이용정지, 계약해지 등의 (삭제)조치를 즉시 취할 수 있으며,
                "이용자"는 법적책임을 부담합니다.
              </Content>
              <Content>
                2. "회사"는 "주민등록법"을 위반한 명의도용 및 결제도 용,
                전화번호 도용, "저작권법"(삭제)을 위반한 불법프로그 램의 제공 및
                운영방해, "정보통신망 이용촉진 및 정보보호 등에 관한 법률"을
                위반한 불법통신 및 해킹 (리버스엔지니 어링, 디컴파일, 크롤링,
                서비스 거부 공격, 웹 해킹, 자동 접속 프로그램 또는 해킹 프로그램
                등을 통해 정상적인 방 법과 다른 방법으로 "서비스를 이용하여
                "회사"의 서버에 부하를 일으키거나 서비스를 방해하는 행위 등),
                악성프로 그램의 배포, 접속권한 초과행위, "여신전문금융업법"을 위
                반한 "이용자"의 신용카드 부정거래 등 이와 유사한 형태의 부정행위
                등과 같이 관련법을 위반한 경우에는 주의, 경 고, 일시정지,
                영구이용정지, 계약해지 등의 조치를 즉시 취 할 수 있으며,
                "이용자"는 법적책임을 부담할 수 있습니다.
              </Content>
              <Content>
                3. 회사는 회원이 계속해서 1년 이상 로그인하지 않는 경우,
                회원정보의 보호 및 운영의 효율성을 위해 이용을 제한 할 수
                있습니다.
              </Content>
              <Content>
                4. 본 조의 이용제한 범위 내에서 제한의 조건 및 세부내용은 회사의
                이용제한정책에서 정하는 바에 의합니다.
              </Content>
              <Content>
                5. 본 조에 따라 서비스 이용을 제한하거나 계약을 해지하 는
                경우에는 회사는 제15조[회원에 대한 통지]에 따라 통지 합니다.
              </Content>
              <Content>
                6. "회원"은 본 조에 따른 이용제한 등에 대해 "회사"가 정 한
                절차에 따라 이의신청을 할 수 있습니다. 이 때 이의가 정당하다고
                회사가 인정하는 경우 "회사"는 즉시 서비스의 이용을 재개합니다.
              </Content>
              <Content>
                7. 본 조에 따라 이용제한이 되는 경우 서비스 이용을 통해 획득한
                혜택 등도 모두 이용중단, 또는 소멸되며, "회사"는 이에 대해
                별도로 보상하지 않습니다.
              </Content>
              <Content>제 14 조 (권리의 귀속)</Content>
              <Content>
                1. 서비스"에 대한 저작권 및 지적재산권은 "회사"에 귀속 됩니다.
                단, "회원의 "게시물 및 제휴계약에 따라 제공된 저작물 등은
                제외합니다.
              </Content>
              <Content>
                2. "회사"가 제공하는 "서비스"의 디자인, "회사"가 만든 텍스트,
                스크립트(script), 그래픽, "회원" 상호간 전송 기 능 등 "회사"가
                제공하는 서비스"에 관련된 모든 상표, 서 비스 마크, 로고 등에
                관한 저작권 기타 지적재산권은 대한 민국 및 외국의 법령에 기하여
                "회사"가 보유하고 있거나 "회사"에게 소유권 또는 사용권이
                있습니다.
              </Content>
              <Content>
                3. "회원"은 이 이용약관으로 인하여 서비스를 소유하거나
                "서비스"에 관한 저작권을 보유하게 되는 것이 아니라, "회 사로부터
                서비스의 이용을 허락 받게 되는바, 정보취득 또 는 개인용도로만
                "서비스"를 이용할 수 있습니다.
              </Content>
              <Content>
                4. "회원"은 명시적으로 허락된 내용을 제외하고는 "서비 스"를 통해
                얻어지는 정보를 영리 목적으로 사용, 복사, 유 통하는 것을
                포함하여, "회사"가 만든 텍스트, 스크립트, 그 래픽의 "회원"
                상호간 전송기능 등을 복사하거나 유통할 수 없습니다.
              </Content>
              <Content>
                5. "회원"은 "회사"에게 "회원"의 "게시물"을 복제, 공중, 송신,
                전시, 배포 및 수정이나 편집 등을 통한 2차적 저작물 또는
                편집저작물을 작성할 권리를 부여하고, "회사"는 "회 원"이 부여한
                권한에 따라 회사"가 제공하는 서비스 내에 서 "회원"의 게시물을
                서비스 운영 및 개선, 신규 서비스 개 발, 홍보 등의 목적으로
                사용할 수 있습니다. 다만, "게시 물"을 등록한 "회원"은 "회사"에
                대하여 자신의 "게시 물"의 삭제 또는 사용 중지를 요청할 수
                있습니다.
              </Content>
              <Content>
                6. 본 조에 따른 세부절차는 정보통신망법 및 저작권법 등
                관련법령이 규정한 범위 내에서 회사가 정한 배달의민족 리 뷰
                운영정책에 따릅니다.
              </Content>
              <Content>* 게시중단요청 : arirang5590@gmail.com</Content>
              <Content>제 15 조 (회원에 대한 통지)</Content>
              <Content>
                1. "회사"가 "회원에 대한 통지를 하는 경우, 전화, 문자, 전자우편,
                앱, 회사가 정하는 공지채널(SNS), 기타 서면 등 의 방법으로 통지할
                수 있습니다. 2."회사"는 불특정다수 "회원"에 대한 통지의 경우,
                1주일 이상 사이트에 게시함으로써 개별 통지에 갈음할 수 있습니
                다. 다만 회원 본인의 거래와 관련하여 중대한 영향을 미치 는
                사항에 대하여는 제1항에서 규정한 방법으로 개별 통지를 합니다.
              </Content>
              <Content>제 16 조 (회사의 의무)</Content>
              <Content>
                1. "회사"는 관련법과 이 약관이 금지하거나 미풍양속에 반 하는
                행위를 하지 않으며, 계속적이고 안정적으로 "서비스" 를 제공하기
                위하여 최선을 다하여 노력합니다.
              </Content>
              <Content>
                2. "회사"는 "회원"이 안전하게 서비스"를 이용할 수 있도 록
                개인정보(신용정보 포함)보호를 위해 개인정보처리방침 을 수립하여
                공시하고 준수합니다.
              </Content>
              <Content>
                3. 회사는 관계 법령이 정한 의무사항을 준수합니다.
              </Content>
              <Content>제 17 조 (개별 서비스에 대한 약관 및 이용조건)</Content>
              <Content>
                1. "회사"는 개별 서비스와 관련한 별도의 약관 및 이용정 책을 둘
                수 있으며, 개별서비스에서 별도로 적용되는 약관 에 대한 동의는
                "회원"이 개별서비스를 최초로 이용할 경우 별도의 동의절차를
                거치게 됩니다. 이 경우 개별 서비스에 대한 이용약관 등이 본
                약관에 우선합니다.
              </Content>
              <Content>
                2. 전항에도 불구하고 "회사"는 개별 서비스에 대한 이용정 책에
                대해서는 서비스"를 통해 공지할 수 있으며, "이용 자"는 이용정책을
                숙지하고 준수하여야 합니다.
              </Content>
              <Content>제 18 조 (개인정보보호)</Content>
              <Content>
                1. "회사"는 "회원"의 개인정보를 보호하기 위하여 정보통 신망법 및
                개인정보 보호법 등 관계 법령에서 정하는 바를 준수합니다.
              </Content>
              <Content>
                2. "회사"는 "회원"의 개인정보를 보호하기 위한 개인정보
                처리방침을 수립하여 서비스 초기화면에 게시합니다. 다 만,
                개인정보처리방침의 구체적 내용은 연결화면을 통하여 볼 수
                있습니다.
              </Content>
              <Content>
                3. "회사"는 관련법령 및 개인정보처리방침에 따라 회원" 의
                개인정보를 최대한 보호하기 위하여 노력합니다.
              </Content>
              <Content>
                4. "회사"의 공식 사이트 이외의 링크된 사이트에서는 "회 사"의
                개인정보처리방침이 적용되지 않습니다. 링크된 사 이트 및 구매
                상품이나 서비스를 제공하는 제3자의 개인정 보 취급과 관련하여는
                해당 사이트 및 해당 제3자의 개인정 보처리방침을 확인할 책임이
                "회원"에게 있으며, "회사"는 이에 대하여 책임을 부담하지
                않습니다.
              </Content>
              <Content>제 19 조 (책임제한)</Content>
              <Content>
                1. "회사"는 다음의 사항에 대해서는 책임을 지지 않습니 다. 단,
                "회사" 및 회사"의 임직원, 대리인의 고의 또는 중 대한 과실이
                인정되는 경우에는 그러하지 아니합니다.
              </Content>
              <Content>
                2. "회사"는 "업주"와 "회원" 간의 상품거래를 중개하는 플랫폼
                서비스만을 제공할 뿐, "재화 등"을 판매하는 당사자 가 아니며,
                "재화 등"에 대한 정보 및 배송, 하자 등에 대한 책임은"업주"에게
                있습니다.
              </Content>
              <Content>
                3. "회사"는 "업주"가 게재한 정보, 자료, 사실의 신뢰 도, 정확성
                등 내용에 관해서는 책임을 지지 않습니다.
              </Content>
              <Content>
                4. "회사"는 천재지변 또는 이에 준하는 불가항력으로 인 하여
                "서비스"를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이
                면제됩니다.
              </Content>
              <Content>
                5. "회사"는 "회원" 및 "업주"가 게재한 이용후기, 맛집 평 가, 사진
                등 정보/자료/사실의 신뢰도, 정확성에 대해서는 책임을 지지
                않습니다.
              </Content>
              <Content>
                6. "회사"는 제3자가 서비스 내 화면 또는 링크된 웹사이 트를
                통하여 광고한 제품 또는 서비스의 내용과 품질에 대 하여 감시할
                의무 기타 어떠한 책임도 지지 아니합니다.
              </Content>
              <Content>
                7. "회사"는 "회원"이 서비스를 이용하여 기대하는 수익을 상실한
                것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은
                자료로 인한 손해에 관하여 책임을 지지 않습 니다.
              </Content>
              <Content>
                8. "회사"는 "회원"간 또는 "회원"과 제3자 상호간에 서비 스를
                매개로 하여 거래 등을 한 경우에는 책임이 면제됩니다.
              </Content>
              <Content>
                9. "회사" 및 "회사"의 임직원 그리고 대리인은 고의 또는 과실이
                없는 한 다음과 같은 사항으로부터 발생하는 손해에 대해 책임을
                지지 아니합니다.
              </Content>
              <Content>
                10. 회원 정보의 허위 또는 부정확성에 기인하는 손해
              </Content>
              <Content>
                11. 서비스에 대한 접속 및 서비스의 이용과정에서 회원"의
                귀책사유로 발생하는 손해
              </Content>
              <Content>
                12. 서버에 대한 제3자의 모든 불법적인 접속 또는 서버의 불법적인
                이용으로부터 발생하는 손해 및 제3자의 불법적 인 행위를
                방지하거나 예방하는 과정에서 발생하는 손해
              </Content>
              <Content>
                13. 제3자가 서비스를 이용하여 불법적으로 전송, 유포하거 나 또는
                전송, 유포되도록 한 모든 바이러스, 스파이웨어 및 기타 악성
                프로그램으로 인한 손해
              </Content>
              <Content>
                14. "회원"의 귀책사유로 인한 "서비스" 이용의 장애로 발생하는
                손해
              </Content>
              <Content>제 20 조 (분쟁해결)</Content>
              <Content>
                1. "회사"는 이용자가 제기하는 정당한 의견이나 불만을 반 영하고
                그 피해를 보상처리하기 위하여 고객상담 및 피해보 상처리기구를
                설치•운영합니다.
              </Content>
              <Content>
                2. "회사"는 이용자로부터 제출되는 불만사항 및 의견은 우 선적으로
                그 사항을 처리합니다. 다만, 신속한 처리가 곤란 한 경우에는
                이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.
              </Content>
              <Content>
                3. "회사"와 이용자 간에 발생한 전자상거래 분쟁과 관련하 여
                이용자의 피해구제신청이 있는 경우에는 공정거래위원 회 또는
                시•도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.
              </Content>
              <Content>제 21조 (준거법 및 관할법원)</Content>
              <Content>
                1. 이 약관의 해석 및 회사와 회원간의 분쟁에 대하여는 대 한민국의
                법을 적용합니다.
              </Content>
              <Content>
                2. 서비스 이용 중 발생한 회원과 회사간의 소송은 민사소 송법에
                의한 관할법원에 제소합니다.
              </Content>
              <Content></Content>
              <Content>&lt;부칙&gt;</Content>
              <Content>이 약관은 2024년 8월 20일부터 시행됩니다.</Content>
            </TextArea>
          )}
          <ModalHeader></ModalHeader>
        </Container>
      </ModalContainer>
    );
  }
);

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 50%;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  border-radius: 10px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalHeader = styled.div`
  width: 95%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 50px;
`;

const Close = styled.div`
  width: 40px;
  height: 50px;
  font-size: 34px;
  text-align: center;
  cursor: pointer;
`;

const TextArea = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;

const Title = styled.div`
  font-size: 18px;
  padding: 15px 0 0 0;
`;
const Content = styled.div`
  padding: 0 0 0 10px;
  font-size: 14px;
`;
