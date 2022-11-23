import type React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
  light,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faEnvelope,
  faDownload,
  faEdit,
  faPen,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      <div className="font-montserrat-alternates font-semibold text-lg bg-gray-200 h-screen overflow-auto">
        <div className="flex flex-col items-center mx-auto space-y-4 rounded-b-2xl">
          <div className="flex bg-white w-full rounded-md py-4">
            <div className="mx-auto px-4 flex-col space-y-4">
              <div className="flex">
                <div className="mr-2">Ma carte perso</div>
                <div className="self-center">
                  <FontAwesomeIcon
                    icon={faPen}
                    className="font-light w-4 text-gray-300 mr-2"
                  />
                </div>
              </div>
              <div className="h-44 w-64 bg-black rounded-lg px-4 pt-6">
                <div className="flex">
                  <img src="/assets/checked.png" className="mr-10" width={25} />
                  <img src="/assets/pcs_logo.png" width={100} />
                </div>
                <div className="flex justify-end">
                  <img src="/assets/wifi_arrows.png" width={60} height={10} />
                </div>
                <div className="text-white text-xs">5304********6718</div>
                <div className="flex justify-between content-start h-8 mb-8">
                  <div className="text-white text-md mt-2">500,00€</div>
                  <div className="mb-8">
                    <img src="/assets/master_card.png" width={50} />
                  </div>
                </div>
              </div>
              <div className="border-2 border-gray-700 rounded-full w-64 p-2  cursor-pointer">
                <div className="text-sm flex">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="font-light w-4 text-gray-700 mr-2"
                  />
                  <div className="text-gray-700 font-normal">
                    Télécharger mon RIB/IBAN
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-gray-50 w-full rounded-md h-screen py-4 rounded-t-2xl">
            <div className="mx-auto px-4 flex-col space-y-4 sm:w-1/4 w-full">
              <div className="flex space-x-2">
                <div>Opérations récentes</div>
                <div className="bg-app-pink rounded-full text-center text-white text-sm w-fit px-2 h-fit self-center">
                  Voir tout
                </div>
              </div>
              <div className="font-light">Novembre 2022</div>
              <div className="px-4 space-y-4">
                <div className="text-xs flex w-full justify-between align-middle bg-white rounded-2xl shadow-lg p-2 items-center">
                  <div className="py-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 w-8"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Retrait</div>
                    <div className="font-normal text-gray-400">
                      CCM PARIS EUROP
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="font-bold">-500,00 €</div>
                    <div className="font-normal text-gray-400">
                      22 Novembre 2022
                    </div>
                  </div>
                </div>
                <div className="text-xs flex w-full justify-between align-middle bg-white rounded-2xl shadow-lg p-2 items-center">
                  <div className="py-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 w-8"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Retrait</div>
                    <div className="font-normal text-gray-400">
                      SOCIETE GENERALE
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="font-bold">-500,00 €</div>
                    <div className="font-normal text-gray-400">
                      22 Novembre 2022
                    </div>
                  </div>
                </div>
                <div className="text-xs flex w-full justify-between align-middle bg-white rounded-2xl shadow-lg p-2 items-center">
                  <div className="py-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 w-8"
                    />
                  </div>
                  <div>
                    <div className="font-bold">Achat</div>
                    <div className="font-normal text-gray-400">
                      SOCIETE GENERALE
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="font-bold">-500,00 €</div>
                    <div className="font-normal text-gray-400">
                      22 Novembre 2022
                    </div>
                  </div>
                </div>
                <div className="text-xs flex w-full justify-between align-middle bg-white rounded-2xl shadow-lg p-2 items-center">
                  <div className="py-4">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-green-500 w-8"
                    />
                  </div>
                  <div className="w-1/2">
                    <div className="font-bold">Rechargement pars carte bancaire</div>
                  </div>
                  <div className="w-24">
                    <div className="font-bold">-500,00 €</div>
                    <div className="font-normal text-gray-400">
                      22 Novembre 2022
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
