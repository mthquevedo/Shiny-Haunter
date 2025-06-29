import { useDispatch, useSelector } from "react-redux";
import { APP_NAME } from "../../constants/app.constants"
import { selectLang } from "../../store/selectors/user-preferences.selectors";
import { useCallback, useMemo } from "react";
import { setLang } from "../../store/reducers/userPreferences";
import { useTranslation } from "react-i18next";
import { LanguagesSupported } from "../../constants/i18n.constants";

export const useHeader = () => {
    const title = APP_NAME;
    const dispatch = useDispatch();
    const value = useSelector(selectLang);
    const { t, i18n } = useTranslation();

    const onValueChange = useCallback((value: string) => {
        dispatch(setLang(value));
    }, [dispatch]);

    const formatValue = useCallback((value: string) => {
        return t("lang." + value);
    }, [t]);

    const currentSelectedValue = useMemo(() => {
        return formatValue(value);
    }, [formatValue, value]);

    const selectOptions = useMemo(() => {
        return Object.values(LanguagesSupported)
            .filter(lang => i18n.hasResourceBundle(lang, 'translation'))
            .map((lang) => ({
                lang,
                label: formatValue(lang)
            }));
    }, [formatValue, i18n]);

    return {
        title,
        currentSelectedValue,
        selectProps: { value, onValueChange },
        selectOptions
    };
}