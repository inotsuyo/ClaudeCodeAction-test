# Claude Code Actions Sandbox

## Node.js + TypeScript セットアップ

このプロジェクトは最小の Node.js + TypeScript 構成を提供します。

### 必要な環境

- Node.js 18.0.0 以上
- pnpm (推奨パッケージマネージャー)

### インストール

```bash
# 依存関係のインストール
pnpm install
```

### 利用可能なスクリプト

```bash
# 開発モード（ファイル監視付き）
pnpm dev

# プロジェクトのビルド
pnpm build

# テストの実行
pnpm test

# リンターの実行
pnpm lint

# リンターによる自動修正
pnpm lint:fix

# コードフォーマット
pnpm format

# フォーマットチェック
pnpm format:check
```

### プロジェクト構造

```
├── src/
│   ├── index.ts        # メインファイル
│   └── index.test.ts   # テストファイル
├── dist/               # ビルド出力（生成される）
├── package.json        # プロジェクト設定
├── tsconfig.json       # TypeScript設定
├── eslint.config.js    # ESLint設定
├── .prettierrc         # Prettier設定
└── vitest.config.ts    # Vitest設定
```

### 開発の流れ

1. `pnpm dev` で開発サーバーを起動
2. `src/` ディレクトリでコードを編集
3. `pnpm test` でテストを実行
4. `pnpm build` で本番用ビルドを作成
