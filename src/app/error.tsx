'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  return (
    <main>
      <h1 className="sr-only">MODU</h1>
      <h2>오류가 발생했습니다 :(</h2>
      <button type="button" onClick={() => reset()}>
        다시 시도하기
      </button>
    </main>
  );
}
