import {
  addFromJson,
  fromJson,
  $fromJson
} from './from-json'
import {
  addToJson,
  toJson,
  $toJson
} from './from-json'

export function addJson({
  chain
}) {
  addToJson(chain)
  addFromJson(chain)

  return chain
}