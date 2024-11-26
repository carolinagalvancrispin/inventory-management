import { Header } from "@/app/components/header";
import { v4 } from "uuid";
import { ChangeEvent, FormEvent, useState } from "react";

type ProductFormData = {
    productId: string;
    name: string;
    price: number;
    stockQuantity: number;
    rating: number;
    descriptions: string;
    colors: string[];
    sizes: string[];
};

type createProductoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProductFormData) => void;
};

export const CreateproductModal = ({ isOpen, onClose, onCreate }: createProductoModalProps) => {
    const [formData, setFormData] = useState<ProductFormData>({
        productId: v4(),
        name: "",
        price: 0,
        stockQuantity: 0,
        rating: 0,
        descriptions: "",
        colors: [],
        sizes: [],
    });

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: name === "price" || name === "stockQuantity" || name === "rating"
                ? parseFloat(value)
                : value,
        });
    };

    const handleArrayChange = (e: ChangeEvent<HTMLInputElement>, field: "colors" | "sizes") => {
        const { value } = e.target;
        setFormData({
            ...formData,
            [field]: value.split(",").map(item => item.trim()),
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreate(formData);
        onClose();
    };

    if (!isOpen) return null;

    const labelCssStyles = "block text-sm font-medium text-gray-700";
    const inputCssStyles = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
            <div className="relative to-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <Header name="crear nuevo producto" />
                <form onSubmit={handleSubmit} className="mt-6">
                    <label htmlFor="productName" className={labelCssStyles}>
                        Nombre del producto
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="ingresa el nombre del producto"
                        onChange={handlerChange}
                        value={formData.name}
                        className={inputCssStyles}
                        required
                    />

                    <label htmlFor="productPrice" className={labelCssStyles}>
                        Ingresa el precio
                    </label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Ingrese el precio del producto"
                        onChange={handlerChange}
                        value={formData.price}
                        className={inputCssStyles}
                        required
                    />

                    <label htmlFor="productRating" className={labelCssStyles}>
                        Ingresa el rating
                    </label>
                    <input
                        type="number"
                        name="rating"
                        placeholder="Ingrese el rating del producto"
                        onChange={handlerChange}
                        value={formData.rating}
                        className={inputCssStyles}
                        required
                    />

                    <label htmlFor="productStockQuantity" className={labelCssStyles}>
                        Ingresa el stock
                    </label>
                    <input
                        type="number"
                        name="stockQuantity"
                        placeholder="Ingrese el stock del producto"
                        onChange={handlerChange}
                        value={formData.stockQuantity}
                        className={inputCssStyles}
                        required
                    />

                    {/* Descripción del producto */}
                    <label htmlFor="productDescription" className={labelCssStyles}>
                        Descripción del producto
                    </label>
                    <textarea
                        name="descriptions"
                        placeholder="Ingrese una descripción del producto"
                        onChange={handlerChange}
                        value={formData.descriptions}
                        className={inputCssStyles}
                        required
                    />

                    {/* Colores disponibles */}
                    <label htmlFor="productColors" className={labelCssStyles}>
                        Colores disponibles (separados por coma)
                    </label>
                    <input
                        type="text"
                        name="colors"
                        placeholder="Ingrese los colores del producto"
                        onChange={(e) => handleArrayChange(e, "colors")}
                        value={formData.colors.join(", ")}
                        className={inputCssStyles}
                        required
                    />

                    {/* Tamaños disponibles */}
                    <label htmlFor="productSizes" className={labelCssStyles}>
                        Tamaños disponibles (separados por coma)
                    </label>
                    <input
                        type="text"
                        name="sizes"
                        placeholder="Ingrese los tamaños del producto"
                        onChange={(e) => handleArrayChange(e, "sizes")}
                        value={formData.sizes.join(", ")}
                        className={inputCssStyles}
                        required
                    />

                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                        Crear
                    </button>
                    <button
                        onClick={onClose}
                        type="button"
                        className="ml-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
                    >
                        Cancelar
                    </button>
                </form>
            </div>
        </div>
    );
};
