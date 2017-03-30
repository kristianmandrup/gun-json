import Gun from 'gun/gun'

export function fromJson(node, json, cb) {
  return {}
}

export async function $fromJson(node, json, cb) {
  return await {}
}


export function addFromJson({
  chain
}) {
  chain.fromJson = function (cb, opts) {
    return fromJson(this, cb, opts)
  }

  chain.$fromJson = function (json, cb, opts) {
    return $fromJson(this, json, cb, opts)
  }

  return chain
}