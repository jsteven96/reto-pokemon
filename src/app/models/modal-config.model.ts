export interface ModalConfig {
    titulo: string;
    etiquetaBotonDescartar?: string;
    etiquetaBotonCerrar?: string;
    deberiaCerrar?(): Promise<boolean> | boolean;
    deberiaDescartar?(): Promise<boolean> | boolean;
    alCerrar?(): Promise<boolean> | boolean;
    alDescartar?(): Promise<boolean> | boolean;
    deshabilitarBotonCerrar?(): boolean;
    deshabilitarBotonDescartar?(): boolean;
    ocultarBotonCerrar?(): boolean;
    ocultarBotonDescartar?(): boolean;
}