import Gun from 'gun/gun'

export function toJson(node, cb) {
  return {}
}

export async function $toJson(node, cb) {
  return await {}
}

export function addToJson({
  chain
}) {
  chain.toJson = function (cb, opts) {
    return toJson(this, cb, opts)
  }

  chain.$toJson = function (json, cb, opts) {
    return $toJson(this, json, cb, opts)
  }

  return chain
}