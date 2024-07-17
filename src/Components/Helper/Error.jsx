export function Error({ message }) {
  return message ? <p className="text-red-500">{message}</p> : null;
}
