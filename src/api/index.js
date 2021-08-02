import { request } from "./client";

export function getSettings() {
  return request({
    method: "get",
    url: "/settings.json",
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
    method: "get",
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
