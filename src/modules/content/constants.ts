export const CUSTOM_REPOSITORY_METADATA = 'CUSTOM_REPOSITORY_METADATA'
export const DTO_VALIDATION_OPTIONS = 'dto_validation_options'

// src/modules/content/constants.ts
export enum PostOrderType {
    CREATED = 'createdAt',
    UPDATED = 'updatedAt',
    PUBLISHED = 'publishedAt',
    COMMENTCOUNT = 'commentCount',
    CUSTOM = 'custom'
}

export enum PostBodyType {
    HTML = 'html',
    MD = 'markdown'
}
