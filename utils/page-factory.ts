import { LocatorContext } from '../types/page-factory/component';

/**
 * Return locator string depends on the context
 * */
export const locatorTemplateFormat = (locator: string, { ...context }: LocatorContext): string => {
    let template = locator;
    for (const [key, value] of Object.entries(context)) {
        template = template.replace(`{${key}}`, value.toString());
    }

    return template;
};