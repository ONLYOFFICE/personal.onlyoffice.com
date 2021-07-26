import * as React from "react";
import Layout from "../../components/layout";
import Head from "./sub-components/head";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import InfoPanel from "../../components/info-panel";

import HeaderContent from "./sub-components/header-content";

const IndexPage = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  return (
    <Layout>
      <Layout.PageHead>
        <Head
          metaDescription={t("AuthDocsMetaDescription")}
          metaKeywords={t("AuthDocsMetaKeywords")}
          title={t("AuthDocsTitlePage")}
          metaDescriptionOg={t("MetaDescriptionOg")}
        />
      </Layout.PageHead>
      <Layout.PageHeader>
        <HeaderContent
          t={t}
          language={language}
          href="sign-in"
          labelButton={t("AuthDocsSignIn")}
        />
      </Layout.PageHeader>
      <Layout.SectionMain>
        <section></section>
        <div className="pure-orange">
          <form
            method="post"
            action="./?lang=ru"
            id="aspnetForm"
            style={{ margin: 0, height: "100%", padding: 0 }}
            encType="multipart/form-data"
          >
            <div className="aspNetHidden">
              <input
                type="hidden"
                name="__VIEWSTATE"
                id="__VIEWSTATE"
                value="ixGrTIlw6kUT1tS3e/fYejPFBm2dGLY2aF14d9ed7IOTgP8xoJYgw2hsttH1uZ9A25JWZp8U6b+ba5G8OppSRyMCqnoB9vrOrdhUPwVJXLs="
              />
            </div>

            <div className="aspNetHidden">
              <input
                type="hidden"
                name="__VIEWSTATEGENERATOR"
                id="__VIEWSTATEGENERATOR"
                value="CB4E55BE"
              />
            </div>

            <div
              id="studioPageContent"
              className="studio-container disabled-side-panel"
            >
              <div className="bar-content">
                <noscript>
                  <div className="info-box excl">
                    Ваш браузер не поддерживает JavaScript!
                  </div>
                </noscript>
              </div>
              <div className="title-content"></div>
              <div className="filter-content"></div>
              <div className="page-content mainPageContent webkit-scrollbar">
                <link
                  href="https://fonts.googleapis.com/css?family=Roboto:500"
                  rel="stylesheet"
                />

                <div className="cookieMess">
                  <div className="cookieMess_container">
                    <p>
                      На этом сайте используются файлы cookie. Продолжая
                      просмотр этого сайта, вы принимаете условия нашей
                      <a
                        target="_blank"
                        href="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.239950403.1196593722.1525950411-169631771.1404734630"
                      >
                        политики конфиденциальности
                      </a>
                    </p>
                    <div id="personalcookie" className="personalcookie">
                      <div className="gotItBtn">Понятно</div>
                    </div>
                  </div>
                </div>

                <div className="auth-form-container ru">
                  <div className="auth-form-head_w ru">
                    <div className="first-screen-content">
                      <div className="auth-form-head">
                        <h1 className="auth-form-header">
                          Ваш персональный онлайн-офис
                        </h1>
                        <p className="auth-form-subheader">
                          Высокая совместимость с форматами MS Office
                        </p>
                      </div>

                      <div className="auth-form-with_form_w">
                        <div className="auth-form-with_form clearFix">
                          <h4 className="auth-form-with_form_title">
                            Создайте бесплатное облако
                          </h4>
                          <div className="auth-input-row">
                            <div className="auth-input-wrapper">
                              <input
                                id="confirmEmail"
                                className="auth-form-with_field_email"
                                type="email"
                                placeholder="Введите свой email-адрес"
                              />
                              <label htmlFor="confirmEmail">Ваш e-mail*</label>
                            </div>
                            <div
                              id="confirmEmailError"
                              className="auth-form-with_form_error"
                            ></div>

                            <div
                              id="confirmEmailBtn"
                              className="auth-form-with_form_btn btn-form disabled"
                            >
                              Создать сейчас
                            </div>
                          </div>

                          <div className="auth-form-settings">
                            <div className="auth-form-setting checkbox-conainer">
                              <label htmlFor="">
                                <input
                                  type="checkbox"
                                  id="spam"
                                  name="spam"
                                  hidden
                                  defaultChecked
                                />
                                <span data-span-for="spam"></span>
                                <label htmlFor="spam">
                                  Я хочу подписаться на рассылку новостей
                                  ONLYOFFICE
                                </label>
                              </label>
                            </div>
                            <div className="auth-form-setting checkbox-conainer">
                              <label htmlFor="">
                                <input
                                  type="checkbox"
                                  id="agree_to_terms"
                                  hidden
                                />
                                <span data-span-for="agree_to_terms"></span>
                                <label htmlFor="agree_to_terms">
                                  Я принимаю
                                  <a
                                    target="_blank"
                                    href="/Terms.aspx?lang=ru-RU"
                                  >
                                    Условия использования
                                  </a>
                                  и
                                  <a
                                    target="_blank"
                                    href="https://help.onlyoffice.com/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.248662407.1867121315.1526272545-169631771.1404734630"
                                  >
                                    Положение о конфиденциальности
                                  </a>
                                  ONLYOFFICE
                                </label>
                              </label>
                            </div>
                          </div>

                          <span className="or-conainer">или войти</span>
                          <span className="auth-form-with_btns_social auth-docs_btns_social">
                            <input
                              type="hidden"
                              className="login-message"
                              value=""
                            />

                            <div id="social" className="social-login">
                              <ul className="account-links">
                                <li className="float-left">
                                  <a
                                    href="/login.ashx?auth=google&mode=popup&callback=loginJoinCallback"
                                    className="popup google ru disabled"
                                    id="google"
                                  >
                                    <span className="icon"></span>
                                  </a>
                                </li>

                                <li className="float-left">
                                  <a
                                    href="/login.ashx?auth=facebook&mode=popup&callback=loginJoinCallback"
                                    className="popup facebook ru disabled"
                                    id="facebook"
                                  >
                                    <span className="icon"></span>
                                  </a>
                                </li>

                                <li className="float-left">
                                  <a
                                    href="/login.ashx?auth=linkedin&mode=popup&callback=loginJoinCallback"
                                    className="popup linkedin ru disabled"
                                    id="linkedin"
                                  >
                                    <span className="icon"></span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </span>
                        </div>
                        <div id="personalAccountLogin">
                          <div className="prebtn">Уже есть аккаунт?</div>
                          <div>Войти</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="auth-form-with auth-form-create-doc">
                    <div className="carousel-container">
                      <div className="create-carousel">
                        <div className="create-carousel-item">
                          <h2 className="create-doc-text-title">
                            Работайте с текстами
                          </h2>
                          <p className="create-doc-text-content">
                            Получите все необходимые инструменты для
                            редактирования и форматирования любого документа.
                          </p>
                        </div>
                        <div className="create-carousel-item">
                          <h2 className="create-doc-text-title">
                            Организуйте данные в электронных таблицах
                          </h2>
                          <p className="create-doc-text-content">
                            Организуйте, анализируйте и вычисляйте любые сложные
                            данные.
                          </p>
                        </div>
                        <div className="create-carousel-item">
                          <h2 className="create-doc-text-title">
                            Создавайте презентации
                          </h2>
                          <p className="create-doc-text-content">
                            Свободно выражайте свои идеи и представляйте их
                            аудитории.
                          </p>
                        </div>
                        <div className="create-carousel-item">
                          <h2 className="create-doc-text-title">
                            Работайте совместно онлайн
                          </h2>
                          <p className="create-doc-text-content">
                            Приглашайте любых людей, чтобы редактировать
                            документы совместно или попросить отрецензировать
                            вашу работу.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="slick-carousel">
                      <div className="create-doc-picture spreadsheet"></div>
                      <div className="create-doc-picture doc"></div>
                      <div className="create-doc-picture collaboration"></div>
                      <div className="create-doc-picture presentation"></div>
                    </div>
                  </div>
                  <div className="auth-form-with auth-form-extend">
                    <h2>Подключите любое облако</h2>
                    <div className="third-party-container">
                      <div>
                        <div className="third-party google"></div>
                      </div>
                      <div>
                        <div className="third-party onedrive"></div>
                      </div>
                      <div>
                        <div className="third-party dropbox"></div>
                      </div>
                      <div>
                        <div className="third-party owncloud"></div>
                      </div>
                      <div>
                        <div className="third-party nextcloud"></div>
                      </div>
                      <div>
                        <div className="third-party yandex"></div>
                      </div>
                    </div>
                  </div>
                  <div className="auth-downloads-block">
                    <h2>Онлайн, десктопные и мобильные приложения</h2>
                    <InfoPanel
                      imgleft={true}
                      textContent={"<b>Получите быстрый доступ к ONLYOFFICE Personal.</b>" }
                      textColor={"#333"}
                      imgUrl={`/images/online_${language}.png`}                     
                      defaultImgUrl={`/images/online_en.png`}
                      bgColor={"#fff"}
                      countButton={[
                        {
                          iconButton: `/images/online_${language}.png`,
                          typeButton: "transparent",
                          textButton: "Button",
                        }, 
                        {
                          iconButton: `/images/online_${language}.png`,
                          typeButton: "transparent",
                          textButton: "Button",
                        }
                        ]}
                    >
                    <b>Получите быстрый доступ к ONLYOFFICE Personal.</b> Скачайте бесплатное расширение для Chrome.
                    </InfoPanel>


                    
                  </div>
                  <div className="auth-quote-block">
                    <div className="auth-quote-container">
                      <p>
                        ONLYOFFICE Personal — онлайн-редактор, включающий все
                        необходимые инструменты для создания документов,
                        электронных таблиц и презентаций, совместимых с
                        Microsoft, и для совместной работы в режиме реального
                        времени.
                      </p>
                      <a
                        href="https://webapps.softpedia.com/app/OnlyOffice-Personal/"
                        target="_blank"
                      >
                        Softpedia
                      </a>
                    </div>
                  </div>
                  <div className="heartheweb-block">
                    <div className="heartheweb-container">
                      <h3>Отзывы пользователей</h3>
                      <div className="heartheweb_reviews_list"></div>
                    </div>
                    <div className="review-disclaimer">
                      Отзывы взяты с сайта
                      <a href="https://www.capterra.com/" target="_blank">
                        Capterra.com
                      </a>
                      . Они представляют собой субъективные мнения отдельных
                      конечных пользователей и не отражают точку зрения
                      Capterra.
                    </div>
                  </div>
                  <script
                    id="heartheweb-reviews-template-list-item"
                    type="text/template"
                  >
                    <div
                      className="review_block review_block_{{data-order}}"
                      data-order="{{data-order}}"
                    >
                      <div className="review_top">
                        <div className="review_block_author_name">
                          {"{author-name}"}
                        </div>
                        <div>{"{ rating }"}</div>
                      </div>
                      <blockquote>
                        <div>{"{review-heading}"}</div>
                        <div className="review_block_text">
                          "{"{review-text}"}"
                        </div>
                      </blockquote>
                    </div>
                  </script>
                </div>

                <div
                  id="sendEmailSuccessPopup"
                  className="default-personal-popup"
                >
                  <div className="default-personal-popup_cnt">
                    <h2>
                      Благодарим Вас за регистрацию в ONLYOFFICE Personal.
                    </h2>
                    <div className="email-success-text">
                      <div>
                        Сообщение для активации отправлено на адрес
                        <span id="activationEmail"></span>
                      </div>
                      <div>
                        Проверьте электронную почту для подтверждения учетной
                        записи.
                      </div>
                    </div>
                    <a id="goToMainPage" className="btn-form">
                      На главную страницу
                    </a>
                  </div>
                </div>

                <div id="passwordRecovery" className="default-personal-popup">
                  <label className="email" htmlFor="studio_emailPwdReminder">
                    Адрес электронной почты
                  </label>
                  <div className="link-as-btn">
                    <span className="back-to-login">Вернуться к входу</span>
                  </div>
                </div>

                <div id="loginPopup" className="default-personal-popup login">
                  <div className="default-personal-popup_cnt">
                    <h2 className="default-personal-popup_h">Вход в аккаунт</h2>
                    <div className="default-personal-popup_form-i">
                      <div className="auth-input-wrapper">
                        <input
                          type="email"
                          id="login"
                          name="login"
                          maxLength="255"
                        />
                        <input
                          type="hidden"
                          className="login-message"
                          value=""
                          data-type="0"
                        />
                        <label className="email">Адрес электронной почты</label>
                      </div>
                      <span className="default-personal-popup_check"></span>
                    </div>
                    <div className="default-personal-popup_form-i">
                      <div className="auth-input-wrapper">
                        <input
                          className="password"
                          id="pwd"
                          maxLength="30"
                          type="password"
                        />
                        <input
                          type="hidden"
                          id="passwordHash"
                          name="passwordHash"
                        />
                        <label className="password">Пароль</label>
                      </div>
                    </div>

                    <span className="checkbox-conainer">
                      <label htmlFor="">
                        <input
                          type="checkbox"
                          id="rememberCheckbox"
                          className="checkbox"
                          hidden
                          defaultChecked
                        />
                        <span
                          className="checkbox-custom"
                          data-span-for="rememberCheckbox"
                        ></span>
                        <label className="label" htmlFor="rememberCheckbox">
                          Запомнить
                        </label>
                      </label>
                    </span>

                    <div className="login_accept-btn-cnt">
                      <button
                        id="loginBtn"
                        className="default-personal-popup_btn btn-form"
                        onClick={() => false}
                      >
                        Войти
                      </button>
                      <div className="link-as-btn">
                        <span className="login_forget-psw">Забыли пароль?</span>
                      </div>
                    </div>

                    <div className="or-conainer">
                      Или войдите через социальные сети
                    </div>
                    <div className="popup_social-nets auth-docs_btns_social">
                      <input type="hidden" className="login-message" value="" />

                      <div id="social" className="social-login">
                        <ul className="account-links">
                          <li className="float-left">
                            <a
                              href="/login.ashx?auth=google&mode=popup&callback=loginJoinCallback"
                              className="popup google ru disabled"
                              id="google"
                            >
                              <span className="icon"></span>
                            </a>
                          </li>

                          <li className="float-left">
                            <a
                              href="/login.ashx?auth=facebook&mode=popup&callback=loginJoinCallback"
                              className="popup facebook ru disabled"
                              id="facebook"
                            >
                              <span className="icon"></span>
                            </a>
                          </li>

                          <li className="float-left">
                            <a
                              href="/login.ashx?auth=linkedin&mode=popup&callback=loginJoinCallback"
                              className="popup linkedin ru disabled"
                              id="linkedin"
                            >
                              <span className="icon"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div id="studio_pwdReminderDialog" className="display-none">
                    <div className="popupContainerClass">
                      <div className="containerHeaderBlock">
                        <table
                          cellSpacing="0"
                          cellPadding="0"
                          border="0"
                          style={{ width: "100%", height: "0px" }}
                        >
                          <tr valign="top">
                            <td>
                              <span
                                id="pswdRecoveryDialogPopupHeader"
                                className="display-none"
                              >
                                Восстановление пароля{" "}
                              </span>
                              <span
                                id="pswdChangeDialogPopupHeader"
                                className="display-none"
                              >
                                Изменение пароля
                              </span>
                            </td>
                            <td className="popupCancel">
                              <div
                                className="cancelButton"
                                onClick={() => false}
                              >
                                &times;
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div
                        style={{ display: "none" }}
                        id="ctl00_PageContent_ctl00_ctl03__pwdRemainderContainer_InfoPanel"
                        className="infoPanel"
                      >
                        <div></div>
                      </div>
                      <div className="containerBodyBlock">
                        <div id="studio_pwdReminderContent">
                          <input
                            type="hidden"
                            id="studio_pwdReminderInfoID"
                            value="ctl00_PageContent_ctl00_ctl03__pwdRemainderContainer_InfoPanel"
                          />
                          <div
                            id="pswdRecoveryDialogText"
                            className="display-none"
                          >
                            Пожалуйста, введите адрес электронной почты,
                            указанный при регистрации на портале. Инструкции для
                            восстановления пароля будут отправлены на этот адрес
                            электронной почты.
                            <input
                              type="email"
                              id="studio_emailPwdReminder"
                              className="textEdit"
                            />
                          </div>
                          <div
                            id="pswdChangeDialogText"
                            className="display-none"
                          >
                            Отправить инструкции по смене пароля на адрес
                            <a target="_blank" name="userEmail"></a>
                          </div>
                          <div
                            id="pwd_rem_panel_buttons"
                            className="middle-button-container"
                          >
                            <a
                              className="button middle blue"
                              onClick={() => false}
                            >
                              Отправить
                            </a>
                            <span className="splitter-buttons"></span>
                            <a
                              className="button middle gray"
                              onClick={() => false}
                            >
                              Отмена
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="personalCreateNow">
                    <div className="prebtn">Еще нет аккаунта?</div>
                    <a>Создать сейчас</a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Layout.SectionMain>
      <Layout.PageFooter>
        <div>
          <div className="personal-footer">
            <div className="personal-footer_w clearFix">
              <ul className="ListSocLink">
                <li>
                  <a
                    className="faceBook"
                    href="https://www.facebook.com/pages/OnlyOffice/833032526736775"
                    target="_blank"
                  >
                    <label title="Facebook" className="social_grey_fb"></label>
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://twitter.com/ONLY_OFFICE"
                    target="_blank"
                    rel="nofollow"
                  >
                    <label title="Twitter" className="social_grey_twi"></label>
                  </a>
                </li>
                <li>
                  <a
                    className="linkedin"
                    href="https://www.linkedin.com/groups/6726380/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <label title="LinkedIn" className="social_grey_in"></label>
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/user/onlyofficeTV"
                    target="_blank"
                    rel="nofollow"
                  >
                    <label title="YouTube" className="social_grey_tube"></label>
                  </a>
                </li>
                <li>
                  <a
                    className="blog"
                    href="https://www.onlyoffice.com/blog"
                    target="_blank"
                  >
                    <label title="Блог" className="social_grey_blog"></label>
                  </a>
                </li>
                <li>
                  <a
                    className="medium"
                    href="https://medium.com/onlyoffice"
                    target="_blank"
                  >
                    <label
                      title="Medium"
                      className="social_grey_medium"
                    ></label>
                  </a>
                </li>
                <li>
                  <a
                    className="instagram"
                    href="https://www.instagram.com/the_onlyoffice/"
                    target="_blank"
                  >
                    <label
                      title="Instagram"
                      className="social_grey_instagram"
                    ></label>
                  </a>
                </li>
                <li>
                  <a
                    className="github"
                    href="https://github.com/ONLYOFFICE/"
                    target="_blank"
                  >
                    <label
                      title="GitHub"
                      className="social_grey_github"
                    ></label>
                  </a>
                </li>
                <li>
                  <a
                    className="fosstodon"
                    href="https://fosstodon.org/@ONLYOFFICE"
                    target="_blank"
                  >
                    <label
                      title="Fosstodon"
                      className="social_grey_fosstodon"
                    ></label>
                  </a>
                </li>
              </ul>
              <div className="partial-personal-footer">
                <ul className="personal-footer-links">
                  <li>
                    <a href="/Terms.aspx?lang=ru-RU" target="_blank">
                      Условия использования
                    </a>
                  </li>
                  <li>
                    <a href="https://www.onlyoffice.com" target="blank">
                      Корпоративное использование
                    </a>
                  </li>
                </ul>
                <div className="personal-footer_rights">
                  © Ascensio System SIA 2021. Все права защищены
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="paging-content"></div>
        <div
          id="container"
          style={{ position: "absolute", top: 0, left: 0 }}
        ></div>

        <script
          type="text/javascript"
          src="https://static.onlyoffice.com/studio/tag/personal.11.5.3/bundle/common-dE7WK7FevoJSWs_vfdhk9w2.js?ver=PERSONAL.COM20210620 85533"
        ></script>

        <script
          type="text/javascript"
          src="/clientscript/488YrvltC2Gv2clyZUJpag2_ru-ru.js?ver=PERSONAL.COM20210620 8553378S-qnMomdEB8dGBg_XITQ2"
        ></script>
        <script
          type="text/javascript"
          src="/clientscript/ktXRENh8ZLbf9RJlHV1Qyw2_ru-ru.js?ver=PERSONAL.COM20210620 855336muLpV5mEKuCoCYC5hxOOw2"
        ></script>

        <span id="ctl00_InlineScriptBefore">
          <script type="text/javascript">
            window.ASC.Resources.Master.IsProductAdmin = false;
            window.ASC.Resources.Master.ShowPromotions = true;
            window.ASC.Resources.Master.ShowTips = true;
          </script>
        </span>
        <script
          type="text/javascript"
          src="https://static.onlyoffice.com/studio/tag/personal.11.5.3/bundle/common-vpDp10LebOHz5cWHVCJiag2.js?ver=PERSONAL.COM20210620 85533"
        ></script>
        <script
          type="text/javascript"
          src="https://static.onlyoffice.com/studio/tag/personal.11.5.3/bundle/common-x9QFUVlyiL5NEPXurV8mZg2.js?ver=PERSONAL.COM20210620 85533"
        ></script>
      </Layout.PageFooter>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(
      filter: {
        ns: { in: ["translations", "fallback"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
