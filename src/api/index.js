import { request } from "./client";

export function getSettings() {
  return request({
    method: "get",
    url: "/settings.json?withpassword=true",
  });
}

export function login(userName, passwordHash) {
  const data = {
    userName,
    passwordHash,
  };

  return request({
    method: "post",
    url: "/authentication.json",
    data,
  });
}

export function join(email) {
  const data = { email };
  return request({
    method: "post",
    url: "/settings/sendjoininvite",
    data,
  });
}

export function recoveryPassword(email) {
  const data = { email };

  return request({
    method: "post",
    url: "/people/password.json",
    data,
  });
}

export function updateUserCulture(id, cultureName) {
  return request({
    method: "put",
    url: `/people/${id}/culture`,
    data: { cultureName },
  });
}

export function getUser() {
  return request({
    method: "get",
    url: `/people/@self.json`,
  });
}

export function getAuthProviders() {
  return request({
    method: "get",
    url: `/people/thirdparty/providers`,
  });
}

export function createUser(data, confirmKey = null) {
  const options = {
    method: "post",
    url: "/people",
    data: data,
  };

  if (confirmKey) options.headers = { confirm: confirmKey };

  return request(options);
}

export function changePassword(userId, passwordHash, key) {
  const data = { passwordHash };

  return request({
    method: "put",
    url: `/people/${userId}/password`,
    data,
    headers: { confirm: key },
  });
}

export function deleteSelf(key) {
  return request({
    method: "delete",
    url: "/people/@self",
    headers: { confirm: key },
  });
}

export function changeEmail(userId, email, key) {
  const data = { email };

  return request({
    method: "put",
    url: `/people/${userId}/password`,
    data,
    headers: { confirm: key },
  });
}

export function thirdPartyLogin(SerializedProfile) {
  return request({
    method: "post",
    url: "authentication.json",
    data: { SerializedProfile },
  });
}

export function checkConfirmLink(data) {
  return request({
    method: "post",
    url: "/authentication/confirm.json",
    data,
  });
}

export function logout() {
  return request({
    method: "post",
    url: "/authentication/logout",
  });
}

export function getPortalPasswordSettings(confirmKey = null) {
  const options = {
    method: "get",
    url: "/settings/security/password",
  };

  if (confirmKey) options.headers = { confirm: confirmKey };

  return request(options);
}
